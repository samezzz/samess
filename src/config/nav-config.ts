import { NavItem } from "@/types";

export const nav: NavItem[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Projects",
        href: "/projects",
        disabled: false
    },
    {
        name: "Blog",
        href: "/blog",
        disabled: true
    },
]

