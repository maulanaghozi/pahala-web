import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./home/home";
import Bantuanku from "./bantuanku/bantuanku";
import TambahBantuan from "./tambahBantuan/onBoardingTambahBantuan";
import Update from "./update/update";
import Profile from "./profile/profile";
import Login from "./profile/login";
import ButtomNavigation from "../layout/bottomNavigation/bottomNavigation";

export default function MainPage(props) {
  return (
    <div>
      <ButtomNavigation>
        <Switch>
          <Route exact path={"/home"} component={Home} />
          <Route path={"/bantuanku"} component={Bantuanku} />
          <Route
            exact
            path={"/onBoardingTambahBantuan"}
            component={TambahBantuan}
          />
          <Route path={"/update"} component={Update} />
          <Route exact path={"/profile"} component={Profile} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/"} render={() => <Redirect to={"/home"} />} />
        </Switch>
      </ButtomNavigation>
    </div>
  );
}
