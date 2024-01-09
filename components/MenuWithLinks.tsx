import { NavigationMenuModel } from '../lib/models';

export type MenuWithLinksProps = {
    datasource: NavigationMenuModel;
};

export function MenuWithLinks({ datasource }: MenuWithLinksProps) {
    const navItems = datasource?.NavItems ?? [];
    const isSocialMenu = navItems.every((x) => x.Icon);

    return (
        <nav>
            <ul className={`nav nav-service navbar-nav ${isSocialMenu ? 'nav-social' : 'nav-pills'}`}>
                {navItems.map((link, index) => (
                    <li
                        key={index}
                        className={`${link.IsActive ? 'active ' : ''}${
                            link.UseDividerBefore ? 'divider-left' : ''
                        }`}
                    >
                        <a
                            href={link.Url}
                            target={link.Target}
                            title={link.NavigationTitle}
                            className={isSocialMenu ? `btn btn-social-icon btn-${link.Icon}` : ''}
                        >
                            {link.Icon ? (
                                <span className={`fa fa-${link.Icon}`}></span>
                            ) : (
                                link.NavigationTitle
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
