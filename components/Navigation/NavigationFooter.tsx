"use client";

import { Link } from "@heroui/react";
import React from "react";

import SocialsList from "@/components/Socials/SocialsList";
import { navLinks } from "@/constants/navigation";

export function AppFooter() {
  return (
    <footer className="w-full bg-content2 p-6 gap-4 flex items-center flex-col snap-end">
      <div className="flex gap-4">
        {navLinks.map((link, idx) => (
          <Link
            className="text-sm"
            underline="hover"
            key={link.path + idx}
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
