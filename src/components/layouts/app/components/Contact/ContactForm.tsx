import emailjs from "@emailjs/browser";
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import Joi from "joi";
import React from "react";

import useSizes from "../../hooks/useSizes";

const schema = Joi.object({
  name: Joi.string().required(),
  reply_to: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .message("Invalid email"),
  subject: Joi.string().min(1).message("Subject is required").required(),
  message: Joi.string().min(1).message("message is required").required(),
});

const clientErrorMessages = {
  reply_to: "An 'Email' is required and must be valid",
  subject: "A 'Subject' is required",
  message: "A 'Message' is required",
  name: "Your 'Name' is required",
};

export default function ContactForm() {
  const { isSmall } = useSizes();
  const formRef = React.useRef<HTMLFormElement>(null);

  const [messageSending, setMessageSending] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const [formData, setFormData] = React.useState({
    name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
    if (!formRef.current) return;
    const result = schema.validate(formData);
    const { error } = result;
    const issueKey = error?.details[0].context?.key;
    if (issueKey) {
      setErrorMessage(clientErrorMessages[issueKey as keyof typeof clientErrorMessages]);
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    try {
      setMessageSending(true);
      const { status } = await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      if (status === 200) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          name: "",
          reply_to: "",
          subject: "",
          message: "",
        });
      } else setErrorMessage("Failed to send message. Please try again later.");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setMessageSending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleOnSubmit} className="max-w-lg grow">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: isSmall ? [0, 1.02, 0.98] : [0, 1, 1],
          translateX: isSmall ? 0 : [0, 0, 20],
          translateY: isSmall ? 0 : [0, 0, 20],
        }}
        transition={{ duration: 1 }}
        className="border-2 rounded sm:aspect-square border-secondary bg-secondary bg-opacity-5 shadow-small grow"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: isSmall ? [0, 1, 1.02] : [0, 1, 1],
            translateX: isSmall ? 0 : [0, 0, 20],
            translateY: isSmall ? 0 : [0, 0, 20],
          }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-full"
        >
          <Card radius="lg" className="w-full h-full">
            <CardHeader>
              <div>
                {successMessage && <p className="text-sm text-success">{successMessage}</p>}
                {errorMessage && <p className="text-sm font-bold text-danger">{errorMessage}</p>}
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col justify-between h-full px-4">
                <Input
                  variant="underlined"
                  size="lg"
                  color="secondary"
                  label="Your Name"
                  name="name"
                  placeholder="Johnny Doe"
                  value={formData.name}
                  onChange={onChangeHandler}
                />
                <Input
                  variant="underlined"
                  size="lg"
                  color="secondary"
                  name="reply_to"
                  label="Your Email"
                  placeholder="your.email@example.com"
                  value={formData.reply_to}
                  onChange={onChangeHandler}
                />
                <Input
                  variant="underlined"
                  size="lg"
                  color="secondary"
                  label="Subject"
                  name="subject"
                  placeholder="What is the Topic?"
                  value={formData.subject}
                  onChange={onChangeHandler}
                />
                <Textarea
                  size="lg"
                  color="secondary"
                  variant="underlined"
                  name="message"
                  label="Message"
                  classNames={{
                    input: "custom-scrollbar",
                  }}
                  placeholder="what would you like to discuss?"
                  value={formData.message}
                  onChange={onChangeHandler}
                />
              </div>
            </CardBody>
            <CardFooter>
              <div className="w-full px-4">
                <Button
                  size="lg"
                  color="primary"
                  className="w-full"
                  type="submit"
                  isLoading={messageSending}
                >
                  Send
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </form>
  );
}
