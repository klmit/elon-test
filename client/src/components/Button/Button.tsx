import React, { Dispatch } from "react";
import cn from "classnames";

//
import s from "./Button.module.scss";

type Props = {
  className?: string;
  text: string;
  withIcon: string;
  onClick: () => void;
  type: "button" | "submit" | "reset";
};

export const Button: React.FC<Props> = ({
  type,
  className,
  withIcon,
  text,
  onClick,
}) => {
  return (
    <button className={cn(className)} type={type} onClick={onClick}>
      {text} {withIcon}
    </button>
  );
};
