import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { NextFont } from "next/dist/compiled/@next/font";
import {
  Fira_Code,
  Fira_Sans,
  Inter,
  JetBrains_Mono,
  Merriweather_Sans,
  Montserrat,
  Noto_Sans,
  Nunito,
  Poppins,
  Roboto_Flex,
  Source_Code_Pro,
} from "next/font/google";
import React from "react";

const interSans = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const PoppinsSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin-ext"],
});

const Roboto = Roboto_Flex({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin-ext"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin-ext"],
});

const merriweatherSans = Merriweather_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

const fonts = {
  interSans: {
    name: "Inter",
    font: interSans,
  },
  PoppinsSans: {
    name: "Poppins",
    font: PoppinsSans,
  },
  firaSans: {
    name: "Fira Sans",
    font: firaSans,
  },
  firaCode: {
    name: "Fira Code",
    font: firaCode,
  },
  Roboto: {
    name: "Roboto",
    font: Roboto,
  },
  montserrat: {
    name: "Montserrat",
    font: montserrat,
  },
  notoSans: {
    name: "Noto Sans",
    font: notoSans,
  },
  sourceCodePro: {
    name: "Source Code Pro",
    font: sourceCodePro,
  },
  merriweatherSans: {
    name: "Merriweather Sans",
    font: merriweatherSans,
  },
  nunito: {
    name: "Nunito",
    font: nunito,
  },
  jetBrainsMono: {
    name: "JetBrains Mono",
    font: jetBrainsMono,
  },
};

interface FontItem {
  name: string;
  font: NextFont;
}

interface FontProps {
  font: FontItem;
  setFont: (font: FontItem) => void;
}

export function useFont() {
  const [font, setFont] = React.useState<FontItem>(fonts.interSans);
  return { font, setFont };
}

export function FontDropDown({ font, setFont }: FontProps) {
  return (
    <div className="relative">
      <Dropdown>
        <DropdownTrigger>
          <Button className="btn btn-primary">{font.name}</Button>
        </DropdownTrigger>
        <DropdownMenu>
          {Object.values(fonts).map((font) => (
            <DropdownItem key={font.name} onClick={() => setFont(font)}>
              {font.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
