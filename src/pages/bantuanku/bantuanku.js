import React from "react";
import TopNavigation from "../../layout/topNavigation/topNavigation";
import { Route, Switch, Redirect } from "react-router-dom";
import LongButton from "../../components/longButton/longButton";
import style from "./bantuanku.module.scss";
import { IconMembantu, IconPermohonan } from "../../assets";

export default function Bantuanku(props) {
  return (
    <div>
      <TopNavigation>
        <>
          <Switch>
            <Route path={"/bantuanku/permohonan"} component={Perkembanganku} />
            <Route path={"/bantuanku/membantu"} component={Terkini} />
            <Route
              path={"/bantuanku"}
              render={() => <Redirect to={"/bantuanku/permohonan"} />}
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
      <IconPermohonan className={style.icon} />
      <span className={style.primaryText}>Belum ada permohonan</span>
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
      <IconMembantu className={style.icon} />
      <span className={style.primaryText}>Belum ada membantu</span>
      <span className={style.secondaryText}>
        Bantuan anda untuk permohonan orang lain akan tercatat dan muncul
        disini, yuk mulai bantu!
      </span>
      <LongButton className={style.button} text={"Bantu Sekarang"} />
    </>
  );
};
