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
} from "@nextui-org/react";
import React from "react";

import { navLinks } from "../../constants/navigation";
import { cls } from "../../helpers/twind-helpers";

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
          <div className={cls("text-3xl flex gap-2 items-center")}>
            <CodeBracketIcon className="w-7 h-7 stroke-secondary" />
            <span className="hidden sm:inline font-semibold">Cameron Leverett</span>
            <span className="sm:hidden">Cameron L.</span>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="end">
        {navLinks.map((link) => (
          <NavbarItem key={link.path}>
            <Link color="foreground" href={link.path}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.path}>
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
