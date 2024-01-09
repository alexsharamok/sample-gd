import React from 'react';

import { RichTextParagraphWrapper, SitecoreImage } from './atom';

import { ImageField, RichTextField } from '@uniformdev/common-client';

export type PageTeaserModel = {
    Url: string;
    Title: string;
    Summary: RichTextField;
    Image?: ImageField;
}

export type PageTeaserProps = {
    datasource: PageTeaserModel;
};

export function PageTeaser({ datasource }: PageTeaserProps) {
    if (!datasource) {
        return null;
    }

    return (
        <div className="thumbnail">
            <a href={datasource.Url}>
                <SitecoreImage image={datasource.Image} width={500} className="img-responsive" />
            </a>
            <div className="caption">
                <h3 className="teaser-heading">{datasource.Title}</h3>

                <RichTextParagraphWrapper html={datasource.Summary} />

                <a href={datasource.Url} className="btn btn-default">
                    Read more
                </a>
            </div>
        </div>
    );
}
