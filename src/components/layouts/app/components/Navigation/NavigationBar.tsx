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
  Switch,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import React from "react";

import { FontDropDown } from "@/components/Dropdowns/FontDropDown";

import { navLinks } from "../../constants/navigation";
import { useApp } from "../../context/AppContext";
import { cls } from "../../helpers/twind-helpers";

export function AppNavbar() {
  const appCtx = useApp();
  const { font, setFont } = appCtx.fontStates;
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(theme !== "dark");

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
        <Link color="foreground" href="/">
          Home
        </Link>
        {navLinks.map((link) => (
          <NavbarItem key={link.path}>
            <Link color="foreground" href={link.path}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <FontDropDown font={font} setFont={setFont} />
        </NavbarItem>
        <NavbarItem>
          <Switch
            aria-label="Toggle theme"
            defaultSelected={isDark}
            onValueChange={(value) => {
              setTheme(value ? "dark" : "light");
              setIsDark(value);
            }}
          />
        </NavbarItem>
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
