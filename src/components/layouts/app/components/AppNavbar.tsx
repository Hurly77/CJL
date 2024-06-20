import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";

import { FontDropDown } from "@/components/drop-down/FontDropDown";

import { useApp } from "../context/AppContext";
import { cls } from "../helpers/twind-helpers";

const links = [
  { path: "/projects/react-and-next", name: "Projects" },
  { path: "/resume", name: "Resume" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

export function AppNavbar() {
  const appCtx = useApp();
  const { font, setFont } = appCtx.fontStates;
  return (
    <Navbar classNames={{ base: "", brand: "" }} maxWidth="full">
      <NavbarBrand>
        <div className={cls("text-3xl")}>
          <span className="text-primary">{"<"}</span>
          <span className="text-green-500">CameronL</span>
          <span className="text-primary">{"/>"}</span>
        </div>
      </NavbarBrand>
      <NavbarContent>
        {links.map((link) => (
          <NavbarItem key={link.path}>{link.name}</NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <FontDropDown font={font} setFont={setFont} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
export default AppNavbar;
