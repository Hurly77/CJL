import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  Spinner,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

import * as SkillIcons from "@/app/components/SkillIcons";
import { UIDemoButtons } from "@/app/components/UIDemo/UIDemoButtons";
import { cls } from "@/app/helpers/twind-helpers";

function ColorSquare(props: { color: string; num: number }) {
  const { color, num } = props;
  const numString = (num < 1 ? "50" : num * 100).toString();
  const colorVariant = "bg-" + color + "-" + numString;

  return <div key={num} className={cls("min-w-16 h-16 border border-white ", colorVariant)}></div>;
}

function ColorSquareList(props: { color: string }) {
  const { color } = props;
  return (
    <Card className={"bg-" + color}>
      <CardHeader>
        <h1
          className={cls(
            "text-2xl capitalize",
            `text-${color === "default" ? "primary" : color}-foreground`,
          )}
        >
          {color}
        </h1>
      </CardHeader>
      <CardBody>
        <div className={cls("grid grid-cols-5 gap-4 p-2")}>
          {Array.from({ length: 10 }).map((_, i) => (
            <ColorSquare key={i} color={color} num={i} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default function Test() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Skills = Object.keys(SkillIcons).map((key) => SkillIcons[key as keyof typeof SkillIcons]);

  return (
    <>
      <div className={cls("app-page")}>
        <Link href="/test/animation">Test Animation</Link>
        <div>
          <svg
            className="h-60 w-60 fill-primary"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="5 5 70 70"
          >
            <path d="M10 5C7 5 5 7 5 10 5 13 7 15 10 15 13 15 15 13 15 10 15 7 13 5 10 5M30 5C27 5 25 7 25 10 25 13 27 15 30 15 33 15 35 13 35 10 35 7 33 5 30 5M50 5C47 5 45 7 45 10 45 13 47 15 50 15 53 15 55 13 55 10 55 7 53 5 50 5M70 5C67 5 65 7 65 10 65 13 67 15 70 15 73 15 75 13 75 10 75 7 73 5 70 5M10 25C7 25 5 27 5 30 5 33 7 35 10 35 13 35 15 33 15 30 15 27 13 25 10 25M30 25C27 25 25 28 25 30 25 33 27 35 30 35 33 35 35 33 35 30 35 27 33 25 30 25M50 25C47 25 45 27 45 30 45 33 47 35 50 35 52 35 55 33 55 30 55 27 53 25 50 25M70 25C67 25 65 27 65 30 65 33 67 35 70 35 73 35 75 33 75 30 75 27 73 25 70 25M10 45C7 45 5 47 5 50 5 53 7 55 10 55 13 55 15 53 15 50 15 47 13 45 10 45M10 65C7 65 5 67 5 70 5 73 7 75 10 75 13 75 15 73 15 70 15 67 13 65 10 65M30 45C27 45 25 47 25 50 25 53 27 55 30 55 33 55 35 53 35 50 35 47 33 45 30 45M30 65C28 65 25 67 25 70 25 73 27 75 30 75 33 75 35 73 35 70 35 67 33 65 30 65M50 45C47 45 45 47 45 50 45 53 47 55 50 55 53 55 55 53 55 50 55 47 53 45 50 45M50 65C47 65 45 67 45 70 45 73 47 75 50 75 53 75 55 72 55 70 55 67 53 65 50 65M70 45C67 45 65 47 65 50 65 53 67 55 70 55 73 55 75 53 75 50 75 47 73 45 70 45M70 65C67 65 65 67 65 70 65 73 67 75 70 75 73 75 75 73 75 70 75 67 73 65 70 65" />
          </svg>

          <svg
            className="h-60 w-60 fill-primary"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="2.5 5 50 35"
          >
            <path d="M5 5A1 1 0 005 10 1 1 0 005 5M20 5A1 1 0 0020 10 1 1 0 0020 5M35 5A1 1 0 0035 10 1 1 0 0035 5M50 5A1 1 0 0050 10 1 1 0 0050 5M5 20A1 1 0 005 25 1 1 0 005 20M20 20A1 1 0 0020 25 1 1 0 0020 20M35 20A1 1 0 0035 25 1 1 0 0035 20M50 20A1 1 0 0050 25 1 1 0 0050 20M5 35A1 1 0 005 40 1 1 0 005 35M20 35A1 1 0 0020 40 1 1 0 0020 35M35 35A1 1 0 0035 40 1 1 0 0035 35M50 35A1 1 0 0050 40 1 1 0 0050 35" />
          </svg>
        </div>
        <div>
          <UIDemoButtons />
          <div className="flex flex-col gap-4 border h-fit ">
            <div className="flex items-center gap-4 border rounded">
              <Avatar size="sm" src="https://i.pravatar.cc/150" />
              <Avatar size="md" src="https://i.pravatar.cc/150" />
              <Avatar size="lg" src="https://i.pravatar.cc/150" />
            </div>
            <Card className="w-full max-w-4xl p-5">
              <CardHeader>
                <h1 className="text-3xl">Title</h1>
              </CardHeader>
              <CardBody>
                <p className="text-large">This is a test page to show how the layout works.</p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Button size="sm" color="primary">
                    Test
                  </Button>
                  <Button size="md" color="primary">
                    Test
                  </Button>
                  <Button size="lg" color="primary">
                    Test
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="flex flex-col">
            <Spinner size="lg" />
            {["bordered", "light", "solid", "underlined"].map((variant) => (
              <Tabs color="primary" variant={variant} key={variant}>
                <Tab>About</Tab>
                <Tab>Resume</Tab>
                <Tab>Projects</Tab>
              </Tabs>
            ))}
          </div>
          <div className="flex gap-x-4">
            <Card className="h-12 w-12 bg-content1"></Card>
            <Card className="h-12 w-12 bg-content2"></Card>
            <Card className="h-12 w-12 bg-content3"></Card>
            <Card className="h-12 w-12 bg-content4"></Card>
          </div>

          <Button size="lg" onClick={onOpen}>
            Open Modal
          </Button>
          <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
            <ModalContent>
              <ModalBody>
                <div className="grid grid-cols-2 gap-4 p-2 border h-fit rounded-small">
                  <ColorSquareList color="default" />
                  <ColorSquareList color="primary" />
                  <ColorSquareList color="secondary" />
                  <ColorSquareList color="success" />
                  <ColorSquareList color="warning" />
                  <ColorSquareList color="danger" />
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4">
            {Skills.map((Skill, i) => (
              <div className="bg-content3 p-1 rounded-full" key={i}>
                <Skill key={i} className="h-10 w-10 fill-foreground" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
