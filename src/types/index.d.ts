import { Icons } from "@/components/icons"

export type NavItem = {
    name: string
    href: string
    disabled?: boolean
}

export type LinkItem = {
    name: string
    href: string
    icon?: keyof typeof Icons
}

export type ProjectType = {
  name: string
  description: string
  href?: string
  domain?: string
  image?: string
  unique?: string
}

export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter: string
      github: string
      linkedIn: string
    }
  }