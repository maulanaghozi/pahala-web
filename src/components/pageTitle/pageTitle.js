import React from "react";
import classNames from "classnames";
import { IconBack } from "../../assets";
import { Link } from "react-router-dom";
import style from "./pageTitle.module.scss";

export default function PageTitle(props) {
  return (
    <div
      className={classNames(style.container, {
        [props.className]: props.className,
      })}
    >
      {props.returnable && (
        <Link to={props.backTo}>
          <IconBack width={16} height={16} />
        </Link>
      )}
      <span>{props.title}</span>
    </div>
  );
}
