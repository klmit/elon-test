import React from "react";

//
import { Header } from "features";
import s from "./TestPage.module.scss";

export const TestPage: React.FC = () => {
  return (
    <div className={s.test}>
      <Header />
    </div>
  );
};
