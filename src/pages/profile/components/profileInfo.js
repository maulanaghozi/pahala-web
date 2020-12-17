import React from "react";
import style from "./style.module.scss";
import { IconVerified } from "../../../assets";

export default function ProfileInfo(props) {
  return (
    <div className={style.profileInfo_wrapper}>
      <div className={style.profilePic}></div>
      <div className={style.info_wrapper}>
        <span className={style.name}>Siti Noer</span>
        <span className={style.email}>sitinoer@mail.com</span>
        <div className={style.verified}>
          <span>Email terverifikasi</span>
          <IconVerified />
        </div>
      </div>
    </div>
  );
}
