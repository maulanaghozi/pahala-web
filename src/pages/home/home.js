import React from "react";
import { IconPahalaExpress, IconNotification } from "../../assets";
import style from "./home.module.scss";
import Banner from "./components/banner";
import BantuanMendesak from "./components/bantuanMendesak";
import ButuhBantuanTerkini from "./components/butuhBantuanTerkini";
import PerkembanganTerkini from "./components/perkembanganTerkini";

export default function Home() {
  return (
    <div className={style.container}>
      <HeaderHome />
      <Banner />
      <BantuanMendesak />
      <PerkembanganTerkini />
      <ButuhBantuanTerkini />
    </div>
  );
}

function HeaderHome() {
  return (
    <div className={style.header}>
      <IconPahalaExpress />
      <IconNotification />
    </div>
  );
}
