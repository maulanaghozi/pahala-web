import React from "react";
import TopNavigation from "../../layout/topNavigation/topNavigation";
import { Route, Switch, Redirect } from "react-router-dom";
import LongButton from "../../components/longButton/longButton";
import style from "./bantuanku.module.scss";
import { IconMembantu, IconPermohonan } from "../../assets";

export default function Bantuanku(props) {
  return (
    <div>
      <TopNavigation
        text={["Permohonan", "Membantu"]}
        path={["/bantuanku/permohonan", "/bantuanku/membantu"]}
      >
        <>
          <Switch>
            <Route path={"/bantuanku/permohonan"} component={Permohonan} />
            <Route path={"/bantuanku/membantu"} component={Membantu} />
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

const Permohonan = () => {
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

const Membantu = () => {
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
