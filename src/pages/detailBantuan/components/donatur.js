import React from "react";
import style from "./style.module.scss";
import ProfileCard from "./profileCard";

export default function Donatur() {
  return (
    <div className={style.donaturContainer}>
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <ProfileCard key={idx} data={item} style={{ marginBottom: "15px" }} />
      ))}
    </div>
  );
}
