import React from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ColektifButtonLogin from "./components/colektifButtonLogin";
import style from "./profile.module.scss";

export default function Profile(props) {
  return (
    <div className={style.container}>
      <PageTitle title={"Login"} returnable={false} />
      <ColektifButtonLogin />
    </div>
  );
}
