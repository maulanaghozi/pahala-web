import React from "react";
import style from "./style.module.scss";
// import Progress from "react-circle-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function BantuanMendesak(props) {
  return (
    <div className={style.bantuanMendesakContainer}>
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <Card key={idx} />
      ))}
    </div>
  );
}

function Card(props) {
  const percentage = 66;
  return (
    <div className={style.cardContainer}>
      <img
        src={
          "https://m.ayobogor.com/images-bogor/post/articles/2020/01/08/5626/yves-alarie--r8_sm71bfg-unsplash_600x400.jpg"
        }
        alt={"gedung"}
      />
      <div className={style.cardInfo}>
        <span>Pahala Express Bantu Perbaiki Gedung Sekolah yang Rusak</span>
        <footer>
          <div className={style.progressContainer}>
            <div className={style.progressWrapper}>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={10}
                styles={buildStyles({
                  textSize: "30px",
                  textColor: "#ed3833",
                  trailColor: "#dedede",
                  pathColor: "#ed3833",
                })}
              />
            </div>
            <div className={style.danaWrapper}>
              <span className={style.terkumpul}>Terkumpul</span>
              <span className={style.dana}>Rp 182.580.000</span>
            </div>
          </div>
          <span>2 hari lagi</span>
        </footer>
      </div>
    </div>
  );
}
