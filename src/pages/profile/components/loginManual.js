import React from "react";
import InputForm from "./inputForm";
import LongButton from "../../../components/longButton/longButton";
import style from "./style.module.scss";

export default function LoginManual(props) {
  return (
    <div className={style.loginManualWrapper}>
      <InputForm />
      <LongButton text={"login"} />
      <div className={style.text_container}>
        <span onClick={() => props.setIsLoginManual(false)}>
          Pilihan Login Lainnya
        </span>
        <span>Lupa Password?</span>
      </div>
    </div>
  );
}
