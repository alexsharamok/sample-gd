import type { ImageField, MultiLineTextField, SingleLineTextField } from '@uniformdev/common-client';

// /sitecore/templates/Feature/Person/_Person
type PersonTemplate = {
    Name: SingleLineTextField;
    Title: SingleLineTextField;
    Picture: ImageField;
    Summary: MultiLineTextField;
};

// /sitecore/templates/Feature/Person/_Quote
type QuoteTemplate = {
    'Cite Origin': SingleLineTextField;
    Quote: MultiLineTextField;
};

export type QuoteModel = PersonTemplate & QuoteTemplate;
