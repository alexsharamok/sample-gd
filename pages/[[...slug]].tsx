import React from 'react';

// Uniform
import {
    createConsoleLogger,
    getNextPageProps,
    NextPageProps,
    PageComponent,
    Placeholder,
    UniformContextProvider,
} from '@uniformdev/next';

import { componentMap } from '../lib/componentMap';

// Page
const Page = function (props: NextPageProps) {
    const logger = createConsoleLogger();

    return (
        <UniformContextProvider
            logger={logger}
            componentMap={process.env.UNIFORM_SITES_HABITAT_PRESENTATION_MODE != 'mvc' ? componentMap : {}}
        >
            <PageComponent {...props}>
                {(renderingContext) => <Placeholder placeholderKey="/" renderingContext={renderingContext} />}
            </PageComponent>
        </UniformContextProvider>
    );
};

// Using Automatic Static Optimization
export async function getStaticPaths() {
    // await import is essential here because getStaticPaths only server-side and import must only happen server side (on client-side the code will blow up)
    const { getStaticPaths } = await import('@uniformdev/next-server');

    if (process.env.UNIFORM_BUILD_MODE !== 'ssr') {
        // If we are exporting the site directly or via a publish
        // specify all static paths and let nextjs handle 404
        return {
            paths: await getStaticPaths(),
            fallback: false,
        };
    } else {
        // If we are running the site in dynamic preview then
        // handle all paths and render them on the fly
        return {
            paths: [],
            fallback: 'blocking',
        };
    }
}

export async function getStaticProps({ params }) {
    const { tryFindItemId, tryGetTimestamp } = await import('@uniformdev/common-server');
    const asPath = '/' + (params?.slug?.join('/') || '');

    if (asPath.startsWith('/__nextjs_original-stack-frame') || asPath.startsWith('/sitecore/images/blank.gif')) {
        return { props: {} }
    }

    const itemId = await tryFindItemId(asPath);
    const timestamp = await tryGetTimestamp(asPath);
    const props = await getNextPageProps({ asPath, itemId, timestamp });
    return { props };
}

export default Page;
