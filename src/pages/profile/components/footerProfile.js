import React from "react";
import style from "./style.module.scss";
import { IconHelp, IconPaper, IconBack } from "../../../assets";

export default function FooterProfile(props) {
  const RenderLine = () => {
    return <div className={style.line}></div>;
  };

  const RenderMoreSection = ({ Icon, text }) => {
    return (
      <div className={style.moreSection}>
        <div>
          <Icon />
          <span>{text}</span>
        </div>
        <IconBack />
      </div>
    );
  };
  return (
    <div>
      <RenderLine />
      <RenderMoreSection Icon={IconHelp} text={"Help"} />
      <RenderLine />
      <RenderMoreSection Icon={IconPaper} text={"Syarat & Ketentuan"} />
      <RenderLine />
      <span>Pahala Express 1.0</span>
    </div>
  );
}
