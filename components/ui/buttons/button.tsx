import React from "react";
import cn from "classnames";
type ButtonColor = "red" | "blue" | "orange";
type ButtonSize = "sm" | "md" | "lg";

interface Props {
  children: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
}

const Button = ({
  children,
  color = "blue",
  size = "md",
  ...buttonProps
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  let bgColor = "",
    hoverColor = "";

  let textColor = "text-white";

  switch (color) {
    case "blue":
      bgColor = "bg-blue-600";
      hoverColor = "bg-blue-400";
      break;
    case "red":
      bgColor = "bg-red-600";
      hoverColor = "bg-red-400";
      break;

    case "orange":
      bgColor = "bg-orange-600";
      hoverColor = "bg-orange-400";
      break;
  }

  return (
    <button
      className={cn(
        {
          "p-1": size === "sm",
          "p-2": size === "md",
          "p-3": size === "lg",
        },
        "border-1",
        bgColor,
        "hover:" + hoverColor,
        textColor,
        "rounded-3xl",
        "shadow-md",
        "focus:outline-none"
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
