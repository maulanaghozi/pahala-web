import React, { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import style from "./topNavigation.module.scss";
import {
  text_container,
  link,
  selected,
  text,
} from "./topNavigation.module.scss";

export default function TopNavigation(props) {
  return (
    <div className={style.container}>
      <div className={style.topNav}>
        {Array.isArray(props.text) &&
          Array.isArray(props.path) &&
          props.text.map((param, i) => (
            <Nav key={i} to={props.path[i]} text={param} />
          ))}
      </div>
      <div className={style.wrapper}>{props.children}</div>
    </div>
  );
}

function Nav(props) {
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
        <span className={classNames(text, { [style.red]: isSelected })}>
          {props.text}
        </span>
      </div>
    </NavLink>
  );
}
