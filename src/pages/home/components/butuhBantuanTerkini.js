import React, { useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SingleDonationProgress from "../../../components/singleDonationProgress/singelDonationProgress";

export default function ButuhBantuanTerkini(props) {
  return (
    <div className={style.butuhBantuanTerkiniContainer}>
      <CategoryNavigation />
      {[1, 2, 3, 4, 5, 6].map((item, idx) => (
        <Card key={idx} />
      ))}
    </div>
  );
}

function CategoryNavigation() {
  const [categoryActive, setCategoryActive] = useState("semua");
  const nav = ["semua", "pendidikan", "keagamaan", "kemasyarakaytan"];

  return (
    <div className={style.navigationContainer}>
      {nav.map((item, idx) => (
        <div
          key={idx}
          onClick={() => setCategoryActive(item)}
          className={classNames(style.category, {
            [style.active]: item === categoryActive,
          })}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className={style.cardContainer}>
      <Link to={"/pahala-bantu"}>
        <img
          src={"https://www.ajnn.net/files/images/20191205-fuqara.jpg"}
          alt={"pembangunan"}
        />
      </Link>
      <section>
        <Link to={"/pahala-bantu"}>
          <span className={style.title}>
            Pahala Express Bantu Pembangunan 1,000 Masjid Rindang
          </span>
        </Link>
        <SingleDonationProgress />
        <Footer />
      </section>
    </div>
  );
}

function Footer(props) {
  return (
    <footer>
      <span className={style.donatur}>582 Donatur</span>
      <span className={style.categoryCard}>Keagamaan</span>
    </footer>
  );
}
