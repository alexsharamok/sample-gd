import { GeneralLinkField } from '@uniformdev/common-client';
import { AnchorHTMLAttributes } from 'react';

export type SitecoreLinkProps = {
    link: Partial<GeneralLinkField>;
} & Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function SitecoreLink(props: SitecoreLinkProps) {
    if (!props) {
        return null;
    }

    const { link, ...overrideAttrs } = props;

    const { url: href, class: className, text, ...attrs } = link;

    const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
        ...attrs,
        href,
        className,
    };

    return (
        <a {...linkProps} {...overrideAttrs}>
            {text}
        </a>
    );
}
