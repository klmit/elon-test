import React, { ReactNode } from "react";
import cn from "classnames";
//
import s from "./Corners.module.scss";

type Props = {
  classname?: string;
  content: ReactNode;
};

export const Corners: React.FC<Props> = ({ content, classname }) => {
  return (
    <div className={cn(classname, s.corner)}>
      <div>{content}</div>
    </div>
  );
};
