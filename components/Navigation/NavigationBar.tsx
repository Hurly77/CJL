"use client";

import { CodeBracketIcon } from "@heroicons/react/24/outline";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import clsx from "clsx";
import React from "react";

import { navLinks } from "@/constants/navigation";

export function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      maxWidth="2xl"
      className="border-b border-divider"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link color="foreground" href="/">
          <div className={clsx("text-3xl flex gap-2 items-center")}>
            <CodeBracketIcon className="w-7 h-7 stroke-secondary" />
            <span className="hidden sm:inline font-semibold">Cameron Leverett</span>
            <span className="sm:hidden">Cameron L.</span>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="end">
        {navLinks.map((link, idx) => (
          <NavbarItem key={link.path + idx}>
            <Link color="foreground" href={link.path}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((link, idx) => (
          <NavbarMenuItem key={idx}>
            <Link color="foreground" onTouchStart={() => setIsMenuOpen(false)} href={link.path}>
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
    </Navbar>
  );
}
export default AppNavbar;
