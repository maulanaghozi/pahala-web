import React from "react";
import style from "./style.module.scss";
import { IconBlackMail, IconLock } from "../../../assets";

export default function InputForm(props) {
  return (
    <div className={style.InputForm_wrapper}>
      <form>
        <div className={style.input_wrapper}>
          <IconBlackMail />
          <input placeholder={"email"} />
        </div>
        <div className={style.line}></div>
        <div className={style.input_wrapper}>
          <IconLock />
          <input placeholder={"password"} />
        </div>
      </form>
    </div>
  );
}
