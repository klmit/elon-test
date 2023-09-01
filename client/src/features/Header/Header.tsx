import React from "react";
import cn from "classnames";
//
import s from "./Header.module.scss";
import Logo from "assets/images/logo.png";
import { menuitems } from "shared/mocks/menuItems";
import { Corners } from "components/Corners/Corners";

export const Header: React.FC = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] =
    React.useState<boolean>(false);

  return (
    <div className={s.header}>
      <div>
        <Corners
          classname={s.corners}
          content={
            <div
              onClick={() => setIsOpenMobileMenu(true)}
              className={cn(s.logo, isOpenMobileMenu && "isMobileOpen")}
            >
              <img src={Logo} alt="logo" className={s.logo} />
            </div>
          }
        />
        <div className={s.menu}>
          {menuitems.map((item, key) => (
            <li className={s.menuItem} key={key}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
