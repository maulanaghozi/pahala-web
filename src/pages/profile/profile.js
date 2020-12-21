import React from "react";
import ProfileInfo from "./components/profileInfo";
import LongButton from "../../components/longButton/longButton";
import Footer from "./components/footerProfile";
import style from "./profile.module.scss";

export default function Profile(props) {
  return (
    <div className={style.container}>
      <ProfileInfo />
      <LongButton text={"Edit Profile"} className={style.buttonEditProfile} />
      <Footer isLogoutVisible={true} />
    </div>
  );
}
