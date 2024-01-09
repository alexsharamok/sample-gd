import React from 'react';
import { RichTextParagraphWrapper, SitecoreLink } from './atom';

import { GeneralLinkField } from '@uniformdev/common-client';
import { TeaserModel } from '../lib/models';

export type CallToActionProps = {
    background: string;
    datasource: TeaserModel & {
        VideoLink?: GeneralLinkField;
    };
};

export function CallToAction({ background = '', datasource }: CallToActionProps) {
    if (!datasource) {
        return null;
    }

    const imageUrl = datasource.TeaserImage.url;
    const videoUrl = datasource.VideoLink?.url;
    const label = datasource['Teaser Label'];

    const isMedia = !!(imageUrl || videoUrl);

    const bgImage = imageUrl ? `url('${imageUrl}')` : null;
    const style = bgImage ? { backgroundImage: bgImage } : null;

    return (
        <div className={`jumbotron text-center ${isMedia ? 'bg-media' : background}`} style={style}>
            {videoUrl && (
                <video autoPlay loop muted className="video-bg img-responsive">
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}

            {label && <span className="label">{label}</span>}

            <h2>{datasource.TeaserTitle}</h2>

            <RichTextParagraphWrapper html={datasource.TeaserSummary} />

            <SitecoreLink link={datasource.TeaserLink} className="btn btn-primary btn-lg" />
        </div>
    );
}
