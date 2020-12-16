import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./home/home";
import Bantuanku from "./bantuanku/bantuanku";
import TambahBantuan from "./tambahBantuan/onBoardingTambahBantuan";
import Update from "./update/update";
import Profile from "./profile/profile";
import Login from "./profile/login";
import Register from "./register/register";
import ButtomNavigation from "../layout/bottomNavigation/bottomNavigation";

export default function MainPage(props) {
  return (
    <div>
      <ButtomNavigation>
        <Switch>
          <Route path={"/home"} component={Home} />
          <Route path={"/bantuanku"} component={Bantuanku} />
          <Route path={"/onBoardingTambahBantuan"} component={TambahBantuan} />
          <Route path={"/update"} component={Update} />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/login"} component={Login} />
          <Route path={"/"} render={() => <Redirect to={"/home"} />} />
        </Switch>
      </ButtomNavigation>
    </div>
  );
}
