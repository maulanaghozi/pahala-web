import React, { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import style from "./bottomNavigation.module.scss";
import {
  text_container,
  link,
  selected,
  text,
  icon,
} from "./bottomNavigation.module.scss";

import {
  IconHome,
  IconHomeSelected,
  IconBantuanku,
  IconBantuankuSelected,
  IconUpdate,
  IconUpdateSelected,
  IconProfile,
  IconProfileSelected,
  IconRedPlus,
  IconBlackCross,
} from "../../assets";

export default function BottomNavigation(props) {
  const navigation = (text, path, icon, selectedIcon) => {
    return {
      text: text,
      path: path,
      Icon: icon,
      SelectedIcon: selectedIcon,
    };
  };

  const nav = [
    navigation("Bantu", "/home", IconHome, IconHomeSelected),
    navigation("Bantuanku", "/bantuanku", IconBantuanku, IconBantuankuSelected),
    navigation(
      "Tambah",
      "/onBoardingTambahBantuan",
      IconRedPlus,
      IconBlackCross
    ),
    navigation("Update", "/update", IconUpdate, IconUpdateSelected),
    navigation("Profile", "/profile", IconProfile, IconProfileSelected),
  ];

  return (
    <div className={style.container}>
      <div className={style.wrapper}>{props.children}</div>
      <div className={style.buttomNav}>
        {nav.map((param, i) => (
          <SidebarNav
            key={i}
            to={param.path}
            Icon={param.Icon}
            SelectedIcon={param.SelectedIcon}
            text={param.text}
          />
        ))}
      </div>
    </div>
  );
}

function SidebarNav(props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <NavLink
      className={link}
      activeClassName={selected}
      to={props.to}
      isActive={(match, location) => {
        if (!match) {
          setIsSelected(false);
          return false;
        }

        setIsSelected(true);
        return true;
      }}
    >
      <div
        className={classNames(text_container, {
          [style.tambah]: props.text === "Tambah",
        })}
      >
        {isSelected ? (
          <props.SelectedIcon className={icon} />
        ) : (
          <props.Icon className={icon} />
        )}
        <span className={classNames(text, { [style.red]: isSelected })}>
          {props.text}
        </span>
      </div>
    </NavLink>
  );
}
