import style from "./App.module.scss";
const langkahBantuan = [
  "Register pemohonan bantuan.",
  "Upload materi proposal berbentuk video, jpg di halaman yang telah disediakan.",
  "Pastikan penerima bantuan telah memberikan izin disertai surat pernyataan jika pengguna hanya membantu orang lain.",
  "Informasi yang disajikan pengguna menjadi tanggung jawab sepenuhnya pengguna.",
];
function App() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2>Permohonan Bantuan</h2>
        <p>Sebelum membuat permohonan bantuan, baca ini dulu ya: </p>
        <h3>Langkah Permohonan Bantuan</h3>
        {langkahBantuan.map((item, idx) => (
          <div className={style.list} key={idx}>
            <span>{idx + 1}</span>
            <p>{item}</p>
          </div>
        ))}
        <h3>Permohonan Bantuan yang Tidak Diperkenankan</h3>
      </div>
    </div>
  );
}

export default App;
