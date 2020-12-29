import React from "react";
import style from "./style.module.scss";
import { IconVerified } from "../../../assets";

export default function PemohonBantuan(props) {
  return (
    <div className={style.pemohonBantuanContainer} style={props.style}>
      <img
        src={
          "https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"
        }
        alt={"profile pic"}
      />
      <div>
        <span className={style.name}>
          Siti Noer <IconVerified />
        </span>
        <span className={style.verificationNote}>Identitas Terverifikasi</span>
      </div>
    </div>
  );
}
