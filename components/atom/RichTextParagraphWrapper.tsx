import { RichTextField } from '@uniformdev/common-client';

export type RichTextWrapperProps = {
    html: RichTextField;
};

export function RichTextParagraphWrapper({ html }: RichTextWrapperProps) {
    /* RTE field content may contain `<p>` tag */
    /* <p dangerouslySetInnerHTML={{ __html: model.Summary }}></p> */
    return (
        <div
            style={{ lineHeight: 1.8, marginBottom: '15px', whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: html ?? '' }}
        ></div>
    );
}
