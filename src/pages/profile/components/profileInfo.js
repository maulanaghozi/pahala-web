import React from "react";
import style from "./style.module.scss";
import { IconVerified } from "../../../assets";
import { getProfilePic } from "../../../utility/utility";

export default function ProfileInfo(props) {
  return (
    <div className={style.profileInfo_wrapper}>
      <img
        src={getProfilePic("undefind")}
        alt={"profile-pic"}
        className={style.profilePic}
      />
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
