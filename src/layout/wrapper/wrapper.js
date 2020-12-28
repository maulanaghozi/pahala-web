import React from "react";
import classNames from "classnames";
import style from "./wrapper.module.scss";

export default function Wrapper(props) {
  return (
    <div
      className={classNames(style.container, {
        [props.className]: props.className,
      })}
    >
      {props.children}
    </div>
  );
}
