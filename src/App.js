import style from "./App.module.scss";
import { IconRedCross } from "./assets";
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
        <div className={style.list}>
          <IconRedCross width={25} height={25} />
          <p>
            Bantuan bersifat <strong>politik</strong>
          </p>
        </div>
        <div className={style.list}>
          <IconRedCross width={25} height={25} />
          <p>
            Bantuan untuk kegiatan <strong>terorisme dan kejahatan</strong> yang
            dilarang oleh Undang-Undang Pemerintah
          </p>
        </div>
        <div className={style.list}>
          <IconRedCross width={25} height={25} />
          <p>
            Informasi bersifat <strong>fiktif</strong>
          </p>
        </div>
        <div className={style.note}>
          <p>
            Pahala Express berhak menutup sepihak pemohon bantuan yang melanggar
            aturan kami. Baca selengkapnya <span>di sini</span>.
          </p>
        </div>
        <button>Mulai Permohonan Bantuan</button>
      </div>
    </div>
  );
}

export default App;
