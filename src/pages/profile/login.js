import React, { useState } from "react";
import PageTitle from "../../components/pageTitle/pageTitle";
import ColektifButtonLogin from "./components/colektifButtonLogin";
import LoginManual from "./components/loginManual";
import Footer from "./components/footerProfile";
import { Link } from "react-router-dom";
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
        Belum punya akun?{" "}
        <Link to={"/register"} className={style.link_daftar}>
          Daftar
        </Link>
      </span>
      <Footer />
    </div>
  );
}
