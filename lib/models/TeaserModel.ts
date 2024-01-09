import type { GeneralLinkField, ImageField, ReferenceField, RichTextField } from '@uniformdev/common-client';

// /sitecore/templates/Feature/Teasers/_TeaserContent
type TeaserContentTemplate = {
    'Teaser Label': string;
    TeaserSummary: RichTextField;
    TeaserImage: ImageField;
    TeaserLink: GeneralLinkField;
};

// /sitecore/templates/Feature/Teasers/_Headline
type TeaserHeadlineTemplate = {
    TeaserTitle: string;
    'Teaser Icon': ReferenceField;
};

export type TeaserModel = TeaserHeadlineTemplate & TeaserContentTemplate;
