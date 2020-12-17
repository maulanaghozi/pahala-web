import React from "react";
import style from "./wrapper.module.scss";

export default function Wrapper(props) {
  return <div className={style.container}>{props.children}</div>;
}
