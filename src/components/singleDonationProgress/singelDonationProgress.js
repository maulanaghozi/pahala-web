import React from "react";
import classNames from "classnames";
import style from "./singelDonationProgress.module.scss";

export default function SingleDonationProgress(props) {
  return (
    <div
      className={classNames(style.container, {
        [props.className]: props.className,
      })}
    >
      <div className={style.progressContainer}>
        <div className={style.progressBarContainer}>
          <div className={style.progressBar}></div>
          <div className={style.progressBarActive}></div>
        </div>
        <div className={style.danaContainer}>
          <span className={style.terkumpul}>Rp 417.128.000</span>
          <span className={style.target}>Rp 680.000.000</span>
        </div>
      </div>
      <span>37 hari lagi</span>
    </div>
  );
}
