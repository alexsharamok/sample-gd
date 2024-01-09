import type { ImageField, MultiLineTextField, SingleLineTextField } from '@uniformdev/common-client';

export type OpenGraphModel = {
    OpenGraphTitle: SingleLineTextField;
    OpenGraphDescription: MultiLineTextField;
    OpenGraphImage: ImageField;
}
