import React from "react";
import style from "./style.module.scss";

export default function Cerita(props) {
  return (
    <div className={style.ceritaContainer}>
      <p>
        Tidak akan merugi orang-orang yang rela mengeluarkan hartanya untuk para
        penuntut ilmu. Setiap ilmu yang diajarkan dan diamalkan akan menjadi
        pahala jariyah.
      </p>

      <img
        src={
          "https://www.kabarselebes.id/wp-content/uploads/2020/01/Masjid-Al-Istiqomah-Ujuna-e1579930331448.jpg"
        }
        alt={"masjid"}
      />

      <p>
        Besar harapan kami bangunan ini akan menjadi sarana penunjang kegiatan
        belajar mengajar sekaligus menjadi fasilitas ibadah yang layak untuk
        masyarakat sekitar.
      </p>

      <p>
        Teruslah berbuat baik, karena dimanapun kita berada, sejauh apapun
        jaraknya, pahala dan kebaikan akan senantiasa menemukan pemiliknya.
        Aamiin
      </p>
    </div>
  );
}
