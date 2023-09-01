import React from "react";

//
import s from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <div>
        <div className={s.logo}>
          <img src="" alt="logo" />
        </div>
        <div className={s.menu}></div>
      </div>
      <div className={s.opacity}></div>
    </div>
  );
};
