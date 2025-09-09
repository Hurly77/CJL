import { Metadata } from "next";

import ContactContainer from "@/components/Pages/Contact/ContactContainer";

export const metadata: Metadata = {
  title: "Contact - Cameron Leverett",
  authors: [{ name: "Cameron Leverett", url: "https://cjleverett.me" }],
  applicationName: "CJ Leverett Portfolio",
  colorScheme: "dark",
  description:
    "Cameron John Leverett, Software Engineer Projects, Web Developer full-stack, front-end, back-end.",
};

export default function Contact() {
  return <ContactContainer />;
}
