import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import LongButton from "../../../components/longButton/longButton";

export default function PerkembanganTerkini(props) {
  return (
    <div className={style.perkembanganTerkiniContainer}>
      {[1, 2, 3].map((item, idx) => (
        <section key={idx}>
          <div className={style.profilePicContainer}>
            <img
              className={style.profilePic}
              src={
                "https://i.pinimg.com/236x/ce/2a/95/ce2a95e99faceaf7af19c273b10ebcc1.jpg"
              }
              alt={"profile-pic"}
            />
            {idx !== 2 && <div className={style.redLine} />}
          </div>
          <Card />
        </section>
      ))}
      <LongButton text={"Lihat Semua"} className={style.button} />
    </div>
  );
}

function Card(props) {
  return (
    <div className={style.cardConrtainer}>
      <header>
        <span className={style.name}>Admin Pahala Express</span>
        <span className={style.dot}>•</span>
        <span className={style.timestamp}>2 minggu lalu</span>
      </header>
      <p>
        Dana yang terkumpul sudah ditransfer ke No. Rek BCA 52xxxxx25 a/n Dimas
        Wiyongko sejumlah Rp 100.000.000
      </p>
      <footer>
        <Link to={"/pahala-bantu"}>
          <img
            src={"https://www.ajnn.net/files/images/20191205-fuqara.jpg"}
            alt={"masjid"}
          />
        </Link>

        <Link to={"/pahala-bantu"}>
          <span>Pahala Express Bantu Pembangunan 1,000 Masjid Rindang</span>
        </Link>
      </footer>
    </div>
  );
}
