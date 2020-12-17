import React from "react";
import classNames from "classnames";
import style from "./longButton.module.scss";

export default function LongButton(props) {
  return (
    <button
      className={classNames(style.button, {
        [props.className]: props.className,
      })}
    >
      {props.text}
    </button>
  );
}
