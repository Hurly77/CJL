import { Button, ButtonProps } from "@nextui-org/react";

const variants: ButtonProps["variant"][] = [
  "bordered",
  "flat",
  "ghost",
  "light",
  "shadow",
  "solid",
];

const colors: ButtonProps["color"][] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];

export function UIDemoButtons() {
  return (
    <div className="grid grid-cols-2">
      {variants.map((variant) => (
        <div key={variant} className="border grid grid-cols-2 gap-4 items-center p-2">
          {colors.map((color) => (
            <Button key={`${variant}-${color}`} variant={variant} color={color}>
              {variant} {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
