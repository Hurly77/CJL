import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  Spinner,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

import { cls } from "@/app/helpers/twind-helpers";
import { FontDropDown, useFont } from "@/components/drop-down/FontDropDown";

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
  const { font, setFont } = useFont();

  return (
    <>
      <div
        className={cls(
          "flex gap-4  w-full border-green-500 border-4 grow bg-background p-4 py-10",
          font?.font?.className,
        )}
      >
        <div>
          <FontDropDown font={font} setFont={setFont} />
        </div>
        <div>
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
      </div>
    </>
  );
}
