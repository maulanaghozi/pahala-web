import React from "react";
import classNames from "classnames";
import style from "./longButtonWithIcon.module.scss";

export default function LongButtonWithIcon(props) {
  return (
    <div
      className={classNames(style.container, {
        [props.className]: props.className,
      })}
    >
      <props.icon width={20} height={20} />
      <span>{props.text}</span>
    </div>
  );
}
