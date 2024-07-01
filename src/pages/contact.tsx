import { motion } from "framer-motion";
import React from "react";

import ContactForm from "@/app/components/Contact/ContactForm";
import SocialsAnimatedList from "@/app/components/Socials/SocialsAnimateList";

import { NextPageWithLayout } from "./_app";

export const Contact: NextPageWithLayout = () => {
  return (
    <div className="flex-col items-center justify-center pb-24 app-page">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-screen-lg px-2 py-4">
        <motion.h1
          className="w-full py-4 text-3xl font-bold sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Reach out or contact me directly.
        </motion.h1>
        <div className="flex flex-col justify-between w-full sm:flex-row">
          <div className="py-6 space-y-4">
            <h2 className="w-full text-2xl font-semibold sm:text-4xl">Get in Touch with me.</h2>
            <p className="max-w-md">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <div className="flex gap-4">
              <SocialsAnimatedList size="md" />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

Contact.title = "Cameron L. - Contact";
export default Contact;
