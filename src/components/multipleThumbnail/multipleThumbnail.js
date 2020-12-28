import React, { useState } from "react";
import classNames from "classnames";
import style from "./multipleThumbnail.module.scss";

export default function MultipleThumbnail({ thumbnails }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={classNames(style.container)}>
      <img
        className={style.thumbnail}
        src={thumbnails[currentIndex].image_url}
        alt={thumbnails[currentIndex].id}
      />
      <NavigateThumbanil
        data={thumbnails}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

function NavigateThumbanil({ data, currentIndex, setCurrentIndex }) {
  return (
    <div className={style.navigateContainer}>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={classNames(style.nav, {
            [style.active]: currentIndex === idx,
          })}
          onClick={() => setCurrentIndex(idx)}
        />
      ))}
    </div>
  );
}
