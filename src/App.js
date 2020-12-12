import style from "./App.module.scss";
import { IconRedCross } from "./assets";
import MainPage from "./pages/main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const langkahBantuan = [
  "Register pemohonan bantuan.",
  "Upload materi proposal berbentuk video, jpg di halaman yang telah disediakan.",
  "Pastikan penerima bantuan telah memberikan izin disertai surat pernyataan jika pengguna hanya membantu orang lain.",
  "Informasi yang disajikan pengguna menjadi tanggung jawab sepenuhnya pengguna.",
];

function App() {
  return (
    <Router>
      <div className={style.container}>
        <Switch>
          <Route path={"/"} component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
