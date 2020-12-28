import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressDana(props) {
  const percentage = 66;

  return (
    <div className={style.progressDanaContainer}>
      <div className={style.danaContainer}>
        <span>Terkumpul</span>
        <span className={classNames(style.dana, style.terkumpul)}>
          Rp 279.385.000
        </span>
      </div>
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
      <div className={style.danaContainer}>
        <span>Target</span>
        <span className={classNames(style.dana, style.target)}>
          Rp 500.000.000
        </span>
      </div>
    </div>
  );
}
