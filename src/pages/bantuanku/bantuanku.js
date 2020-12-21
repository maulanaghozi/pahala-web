import React from "react";
import TopNavigation from "../../layout/topNavigation/topNavigation";
import { Route, Switch, Redirect } from "react-router-dom";
import LongButton from "../../components/longButton/longButton";
import style from "./bantuanku.module.scss";

export default function Bantuanku(props) {
  return (
    <div>
      <TopNavigation>
        <div>
          <Switch>
            <Route path={"/bantuanku/permohonan"} component={Perkembanganku} />
            <Route path={"/bantuanku/membantu"} component={Terkini} />
            <Route
              path={"/bantuanku"}
              render={() => <Redirect to={"/bantuanku/permohonan"} />}
            />
          </Switch>
        </div>
      </TopNavigation>
    </div>
  );
}

const Perkembanganku = () => {
  return (
    <>
      <LongButton className={style.button} text={"Tambah Permohonan"} />
    </>
  );
};

const Terkini = () => {
  return (
    <>
      <LongButton text={"Bantu Sekarang"} />
    </>
  );
};
