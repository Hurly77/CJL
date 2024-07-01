import { Link } from "@nextui-org/react";

import { SocialIcons } from "./index";

export default function SocialsList() {
  return (
    <div className="grid grid-flow-col gap-4">
      {SocialIcons.map(({ Icon, link }, i) => (
        <Link key={i} href={link} target="_blank" className="rounded-full p-1">
          <Icon className="w-10 h-10 p-1 fill-foreground" />
        </Link>
      ))}
    </div>
  );
}
