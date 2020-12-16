import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ColektifButtonLogin from "../profile/components/colektifButtonLogin";
import style from "./register.module.scss";

export default function Profile(props) {
  return (
    <div className={style.container}>
      <PageTitle title={"Daftar"} returnable={true} />
      <ColektifButtonLogin />
    </div>
  );
}
