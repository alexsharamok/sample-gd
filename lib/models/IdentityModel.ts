import type { ImageField } from '@uniformdev/common-client';

export type IdentityModel = {
    Logo?: ImageField;
    LogoTagLine?: string;
    Copyright?: string;
    OrganizationName?: string;
    OrganizationAddress?: string;
    OrganizationPhone?: string;
    OrganizationEmail?: string;
};
