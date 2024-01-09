import React from 'react';

import { SitecoreImage } from './atom';

import { QuoteModel } from '../lib/models';

export type QuoteProps = {
    background: string;
    // model: QuoteModel;
    datasource: QuoteModel;
};

export function Quote({ background = '', datasource }: QuoteProps) {
    if (!datasource) {
        return null;
    }

    return (
        <blockquote className={`blockquote-center ${background}`}>
            <header>
                <SitecoreImage image={datasource.Picture} width={150} className="img-responsive" />
                <p>{datasource.Name}</p>
                <p>
                    {datasource.Title}
                    {datasource.Title && datasource['Cite Origin'] ? ', ' : ''}
                    {datasource['Cite Origin']}
                </p>
            </header>
            <p style={{ whiteSpace: 'pre-wrap' }}>{datasource.Quote}</p>
        </blockquote>
    );
}
