

/**
 * icon: Feather icon if available (see https://github.com/feathericons/feather#usage)
 * link: href link if available
 * isReactLink: if the link is a react route
 * items: sub-level nav items
 *
 * itemBindId: for internal use. Used to bind collapse and expansion of sub-menus to their parent
 */
export type SidebarNavItemType = {
    contents: string;
    icon?: string;
    link?: string;
    isReactLink?: boolean;
    isHeader?: boolean;
    subItems?: SidebarNavItemType[];
    itemBindId?: string;
};

export type SidebarNavItemCollection = {
    items: SidebarNavItemType[];
}
