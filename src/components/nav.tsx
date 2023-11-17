"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { nav } from "@/config/nav-config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to execute this effect only once


  return (
    <nav className="py-10 mx-auto mt-8 md:mt-12 ">
      <div className={`flex h-5 items-center space-x-4 text-sm ${isScrolled ? 'glassmorphism px-2 py-3 transition-all duration-500 ease-in-out' : ''} rounded-full`}>
        {nav.map((navItem, index) => (
          <React.Fragment key={index}>
            <Link
              className={cn(
                "text-[#737373] hover:text-[#1C1C1C] hover:dark:text-primary transition-all duration-500 ease-in-out ",
                isScrolled && 'dark:text-gray-300',
                pathname === navItem.href
                  ? "text-primary font-semibold"
                  : "transparent",
                navItem.disabled &&
                  "cursor-not-allowed opacity-80 hover:dark:text-[#737373]"
              )}
              href={navItem.disabled ? "/" : navItem.href}
            >
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
