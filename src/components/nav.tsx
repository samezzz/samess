'use client';

import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { nav } from "@/config/nav-config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="py-10 mx-auto">
      <div className="flex h-5 items-center space-x-4 text-sm">
        {nav.map((navItem, index) => (
          <React.Fragment key={index}>
            <Link className={cn(
              "text-[#737373] hover:text-primary",
              pathname === navItem.href ? "text-primary font-semibold" : "transparent",
              navItem.disabled && "cursor-not-allowed opacity-80 hover:text-[#737373]"
            )} href={navItem.href}>
              {navItem.name}
            </Link>
            {index !== nav.length - 1 && <Separator orientation="vertical" />}
          </React.Fragment>
        ))}
      </div>
      <Separator className="my-4" />
    </nav>
  );
};

export default Navbar;
