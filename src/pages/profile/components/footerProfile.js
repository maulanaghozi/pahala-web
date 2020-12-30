import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { IconHelp, IconPaper, IconBack, IconLogout } from "../../../assets";

export default function FooterProfile(props) {
  const RenderLine = ({ visible }) => {
    return (
      <div
        className={classNames(style.line, { [style.noLine]: visible })}
      ></div>
    );
  };

  const RenderMoreSection = ({ Icon, text, isPressed }) => {
    return (
      <div className={style.moreSection}>
        <div className={classNames({ [style.press]: isPressed })}>
          <Icon />
          <span>{text}</span>
        </div>
        <IconBack />
      </div>
    );
  };
  return (
    <div>
      <RenderLine visible={props.isLogoutVisible} />
      <RenderMoreSection isPressed={true} Icon={IconHelp} text={"Help"} />
      <RenderLine />
      <RenderMoreSection
        isPressed={true}
        Icon={IconPaper}
        text={"Syarat & Ketentuan"}
      />
      <RenderLine />
      {props.isLogoutVisible && (
        <>
          <RenderMoreSection
            isPressed={true}
            Icon={IconLogout}
            text={"Logout"}
          />
          <RenderLine />
        </>
      )}
      <span>Pahala Express 1.0</span>
    </div>
  );
}
