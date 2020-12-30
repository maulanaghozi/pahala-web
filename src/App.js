import style from "./App.module.scss";
import MainPage from "./pages/main";
import Register from "./pages/register/register";
import DetailBantuan from "./pages/detailBantuan/detailBantuan";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={style.container}>
        <Switch>
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/pahala-bantu"} component={DetailBantuan} />
          <Route path={"/"} component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
