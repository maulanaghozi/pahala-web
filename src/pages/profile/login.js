import React, { useState } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ColektifButtonLogin from "./components/colektifButtonLogin";
import LoginManual from "./components/loginManual";
import Footer from "./components/footerProfile";
import style from "./profile.module.scss";

export default function Login(props) {
  const [isLoginManual, setIsLoginManual] = useState(false);
  return (
    <div className={style.container}>
      <PageTitle title={"Login"} returnable={false} />
      {isLoginManual ? (
        <LoginManual setIsLoginManual={setIsLoginManual} />
      ) : (
        <ColektifButtonLogin setIsLoginManual={setIsLoginManual} />
      )}
      <span className={style.text_confirmation}>
        Belum punya akun? <span className={style.link_daftar}>Daftar</span>
      </span>
      <Footer />
    </div>
  );
}
