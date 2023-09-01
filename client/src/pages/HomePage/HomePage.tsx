import React from "react";

//
import s from "./HomePage.module.scss";
import { Header, StartSection } from "features";

export const HomePage: React.FC = () => {
  return (
    <div className={s.home}>
      <Header />
      <StartSection />
    </div>
  );
};
