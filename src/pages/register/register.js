import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../layout/wrapper/wrapper";
import PageTitle from "../../components/pageTitle/pageTitle";
import ColektifButtonLogin from "../profile/components/colektifButtonLogin";
import FormInput from "../profile/components/inputForm";
import LongButton from "../../components/longButton/longButton";
import style from "./register.module.scss";

export default function Register(props) {
  return (
    <Wrapper>
      <PageTitle title={"Daftar"} returnable={true} backTo={"/login"} />
      <FormInput />
      <LongButton text={"Daftar"} className={style.btn_daftar} />
      <span className={style.text_confirmation}>
        Sudah punya akun?{" "}
        <Link to={"/login"} className={style.link_daftar}>
          Login
        </Link>
      </span>
      <div className={style.line}></div>
      <div className={style.align_center}>
        <span>Atau daftar dengan</span>
      </div>
      <ColektifButtonLogin isHideEmailLogin={true} />
    </Wrapper>
  );
}
