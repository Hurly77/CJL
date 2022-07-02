import SliderOver from "common/slide-over";
import Link from "next/link";
import { useState } from "react";

const links = [
  { path: "/projects/vanilla", name: "Projects" },
  { path: "/resume", name: "Resume" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

const Navbar = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 w-full border-b bg-opacity-95 bg-base-100 text-base-100 border-opacity-20 border-base-content">
        <div hidden={true} className="max-w-5xl m-1 mx-auto navbar">
          <button
            className="block btn btn-sm btn-secondary lg:hidden"
            onClick={() => setOpen(!open)}
          >
            menu
          </button>
          <SliderOver open={open} setOpen={() => setOpen(!open)}>
            {" "}
            {links.map((link, id) => (
              <Link key={id} href={link.path} passHref>
                <a className="rounded-none border-b-base-content border-opacity-20 btn btn-sm btn-ghost h-1/5">
                  {link.name}
                </a>
              </Link>
            ))}
          </SliderOver>
          <div className="flex flex-none hidden px-2 mx-2 -translate-x-4 text-base-content sm:navbar-start lg:flex">
            {links.map((link, id) => (
              <Link key={id} href={link.path} passHref>
                <a className="m-1 btn btn-sm btn-ghost">{link.name}</a>
              </Link>
            ))}
          </div>

          <div className="lg:navbar-end navbar-start">{children}</div>
        </div>
      </div>
      <div className="w-full navbar"></div>
    </>
  );
};

export default Navbar;
