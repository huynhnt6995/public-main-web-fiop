export interface MenuItemModel {
    link: string;
    name: string;
}
export const MENU_DATA: MenuItemModel[] = [
    { link: "/industry", name: "Industry" },
    {
        link: "/technology",
        name: "Technology",
    },
    {
        link: "/solution",
        name: "Solution",
    },
    {
        link: "/blog",
        name: "Blog",
    },
    {
        link: "/pricing",
        name: "Pricing",
    },
];
