import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useTheme } from "next-themes";

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();

  const themes = ["dark", "light", "purple-dark"];

  return (
    <Dropdown>
      <DropdownTrigger id="dropdown-basic">{theme}</DropdownTrigger>

      <DropdownMenu>
        {themes.map((t) => (
          <DropdownItem key={t} onClick={() => setTheme(t)}>
            {t}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
