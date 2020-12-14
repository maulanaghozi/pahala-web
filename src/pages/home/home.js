import React from "react";
import { IconPahalaExpress, IconNotification } from "../../assets";

export default function Home() {
  return (
    <div>
      <HeaderHome />
    </div>
  );
}

function HeaderHome() {
  return (
    <div>
      <IconPahalaExpress />
      <IconNotification />
    </div>
  );
}
