import React from "react";
import LongButtonWithIcon from "../../../components/longButtonWIthIcon/longButtonWithIcon";
import {
  IconApple,
  IconFacebook,
  IconGoogle,
  IconRedMail,
} from "../../../assets";
import style from "./style.module.scss";

export default function ColektifButtonLogin(props) {
  return (
    <div className={style.container}>
      <LongButtonWithIcon icon={IconRedMail} text={"Login dengan Email"} />
      <LongButtonWithIcon icon={IconFacebook} text={"Login dengan Facebook"} />
      <LongButtonWithIcon icon={IconGoogle} text={"Login dengan Google"} />
      <LongButtonWithIcon icon={IconApple} text={"Login dengan Apple"} />
    </div>
  );
}
