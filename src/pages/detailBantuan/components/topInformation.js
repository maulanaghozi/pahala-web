import React from "react";
import { IconLocation } from "../../../assets";
import style from "./style.module.scss";

export default function TopInformation(props) {
  return (
    <div className={style.topInformationContainer}>
      <span className={style.categoryTag}>Rumah Ibadah</span>
      <span className={style.title}>
        Pahala Express Bantu Pembangunan 1,000 Masjid Rindang
      </span>
      <section className={style.location}>
        <IconLocation />
        <span>Bogor, Jawa Barat</span>
      </section>
      <footer>
        <span className={style.donatur}>
          <strong>586 </strong>Donatur
        </span>
        <span className={style.timestamp}>238 hari lagi</span>
      </footer>
    </div>
  );
}
