import React from "react";
import TopNavigation from "../../layout/topNavigation/topNavigation";
import { Route, Switch, Redirect } from "react-router-dom";
import LongButton from "../../components/longButton/longButton";
import style from "./update.module.scss";
import { IconToa } from "../../assets";

export default function Update(props) {
  return (
    <div>
      <TopNavigation
        text={["Perkembanganku", "Terkini"]}
        path={["/update/perkembanganku", "/update/terkini"]}
      >
        <>
          <Switch>
            <Route path={"/update/perkembanganku"} component={Perkembanganku} />
            <Route path={"/update/terkini"} component={Terkini} />
            <Route
              path={"/update"}
              render={() => <Redirect to={"/update/perkembanganku"} />}
            />
          </Switch>
        </>
      </TopNavigation>
    </div>
  );
}

const Perkembanganku = () => {
  return (
    <>
      <IconToa className={style.icon} />
      <span className={style.primaryText}>Belum ada update</span>
      <span className={style.secondaryText}>
        Supaya dapat update dari permohonan bantuan, mulai bantu yuk!
      </span>
      <LongButton className={style.button} text={"Tambah Permohonan"} />
    </>
  );
};

const Terkini = () => {
  return (
    <>
      <IconToa className={style.icon} />
      <span className={style.primaryText}>Belum ada update</span>
      <span className={style.secondaryText}>
        Supaya dapat update dari permohonan bantuan, mulai bantu yuk!
      </span>
      <LongButton className={style.button} text={"Tambah Permohonan"} />
    </>
  );
};
