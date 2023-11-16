import { LinkItem, NavItem } from "@/types";

export const nav: NavItem[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Projects",
        href: "/projects",
        disabled: true
    },
    {
        name: "Blog",
        href: "/blog",
        disabled: true
    },
]

export const links: LinkItem[] = [
    {
        name: "Github",
        href: "https://github.com/samezzz",
        icon: "github",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/samuel-essilfie-274684252/",
        icon: "linkedIn",
    },
    {
        name: "Twitter",
        href: "https://twitter.com/_Samess",
        icon: "twitter",
    },
]