import React from "react";
import Wrapper from "../../layout/wrapper/wrapper";
import MultipleThumbnail from "../../components/multipleThumbnail/multipleThumbnail";
import TopInformation from "./components/topInformation";
import ProgressDana from "./components/progressDana";
import style from "./detailBantuan.module.scss";

const images = [
  { id: 1, image_url: "https://www.ajnn.net/files/images/20191205-fuqara.jpg" },
  {
    id: 2,
    image_url:
      "https://alhasanah.or.id/wp-content/uploads/2020/02/Progress-Pembangunan-Masjid-SIT-Betungan-Minggu-3-Januari-2020-alhasanah-bengkulu-1.jpg",
  },
  {
    id: 3,
    image_url:
      "https://www.sawahan-ponjong.desa.id/assets/files/artikel/sedang_156791818669693348_1633462376789578_8682205805371457536_n.jpg",
  },
  {
    id: 4,
    image_url: "https://www.mediaaceh.com/files/images/wp-dscf9961.jpg",
  },
  {
    id: 5,
    image_url:
      "https://s3.ap-southeast-1.amazonaws.com/prod-act-news/1592190271_5ee6e53f4b1e7.jpeg",
  },
];

export default function DetailBantuan(props) {
  return (
    <Wrapper className={style.container}>
      <MultipleThumbnail thumbnails={images} />
      <main>
        <TopInformation />
        <ProgressDana />
        <Section label={"Pemohon Bantuan"}></Section>
      </main>
    </Wrapper>
  );
}

function Section(props) {
  return (
    <section>
      <header>
        <span>{props.label}</span>
      </header>
      {props.children}
    </section>
  );
}
