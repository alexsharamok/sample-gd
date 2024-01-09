export type NavigationMenuModel = {
    NavItems: NavigationMenuItemModel[];
};

export type NavigationMenuItemModel = {
    IsActive: boolean;
    Url: string;
    NavigationTitle: string;

    Target?: string;
    UseDividerBefore?: boolean;
    Icon?: string;
    Children?: NavigationMenuItemModel[];
    ShowChildren?: boolean;
};
