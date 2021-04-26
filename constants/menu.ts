export interface MenuItemModel {
    link: string;
    name: string;
}
export const MENU_DATA: MenuItemModel[] = [
    { link: "/industry", name: "menu.industry" },
    {
        link: "/technology",
        name: "menu.technology",
    },
    {
        link: "/solution",
        name: "menu.solution",
    },
    {
        link: "/blog",
        name: "menu.blog",
    },
    {
        link: "/pricing",
        name: "menu.pricing",
    },
];
