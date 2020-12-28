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
      <Section label={"Bantuan Mendesak"}>
        <BantuanMendesak />
      </Section>
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

function Section(props) {
  return (
    <section className={style.section}>
      <div className={style.label}>{props.label}</div>
      {props.children}
    </section>
  );
}
