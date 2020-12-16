import React from "react";
import classNames from "classnames";
import { IconBack } from "../../assets";
import style from "./pageTitle.module.scss";

export default function PageTitle(props) {
  return (
    <div
      className={classNames(style.container, {
        [props.className]: props.className,
      })}
    >
      {props.returnable && <IconBack width={16} height={16} />}
      <span>{props.title}</span>
    </div>
  );
}
