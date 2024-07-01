import { Link } from "@nextui-org/react";
import React from "react";

import { navLinks } from "../../constants/navigation";
import SocialsList from "./../Socials/SocialsList";

export function AppFooter() {
  return (
    <footer className="w-full bg-content4 dark:bg-content2 p-6 gap-4 flex items-center flex-col snap-end">
      <div className="flex gap-4">
        {navLinks.map((link) => (
          <Link
            className="text-sm"
            underline="hover"
            key={link.path}
            href={link.path}
            color="foreground"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex my-2">
        <div className="grid grid-flow-col gap-10">
          <SocialsList />
        </div>
      </div>
      <div>
        <p className="text-foreground-400">
          Copyright © 2021 - All right reserved by Cameron J. Leverett
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
