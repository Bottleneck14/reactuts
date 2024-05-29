import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Beranda() {
  const gambar = ["bg1.png", "bg2.png", "bg3.png"];

  const [index, setIndex] = useState(0);

  function tombolKanan() {
    setIndex((index + 1) % gambar.length);
  }
  function tombolKiri() {
    setIndex((index - 1 + gambar.length) % gambar.length);
  }
  // **************************************
  const value = [
    {
      icon: "./value1.png",
      judul: "Kedamaian dan Ketenangan",
      desc: "Jauhkan diri dari hiruk pikuk kota dan temukan kedamaian di tengah rimbunnya pepohonan pinus",
    },
    {
      icon: "./value2.png",
      judul: "Petualangan dan Tantangan",
      desc: "Dapatkan pengalaman baru dan ciptakan kenangan tak terlupakan bersama teman atau keluarga",
    },
    {
      icon: "./value3.png",
      judul: "Keindahan Alam",
      desc: "Saksikan panorama alam yang indah dengan pepohonan pinus yang menjulang tinggi",
    },
    {
      icon: "./value4.png",
      judul: "Pelestarian Alam dan Edukasi",
      desc: "Ajarkan anak-anak tentang pentingnya menjaga keseimbangan alam dan menghargai alam",
    },
  ];

  const mapingValue = value.map((e) => (
    <div className="value-in">
      <img src={`./${e.icon}`} alt="icon" width={"70px"} />
      <br />
      <h3>{e.judul}</h3>
      <p>{e.desc}</p>
    </div>
  ));

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <div className="cover">
        <div
          style={{
            background: `url(./${gambar[index]}) no-repeat`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="cover-in"
        >
          <span>
            <h1>
              Jelajahi Pesona <br /> Hutan Pinus Pengger
            </h1>
            <p style={{ color: "white" }}>
              Temukan kedamaian dan keindahan alam di Hutan Pinus Pengger
            </p>
          </span>
          <button
            onClick={() => (location.href = "/reactuts/wip")}
            className="jelajah"
          >
            Jelajahi
          </button>
          <div className="cover-arrow">
            <img onClick={tombolKiri} src="./left.png" alt="kiri" />
            <img onClick={tombolKanan} src="./kanan.png" alt="kanan" />
          </div>
        </div>
      </div>

      {/* _________________________________ */}

      <div className="beranda-body">
        <div className="value" data-aos="slide-left">
          {mapingValue}
        </div>
        <br />
        <br />
        <br />
        <div className="banner1" data-aos="slide-right">
          <h1>
            Nikmati <br /> Perjalananmu
          </h1>
          <p>
            Abadikan momen indah dengan foto-foto instagramable di <br />{" "}
            berbagai spot foto yang menarik
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="destinasi">
          <div className="destinasi-in">
            <span>
              <h2>Destinasi Menarik</h2>
              <p>
                Jadikan petualangan ini sebagai kesempatan untuk mengisi waktu
                luang Anda dengan pengalaman yang tak terlupakan.
              </p>
            </span>
            <br />
            <div
              onClick={() => (location.href = "/Galeri")}
              className="destinasi-kiri"
              data-aos="fade-up"
            >
              <div
                style={{
                  background: "url(./spot1.jpg)",
                  backgroundSize: "cover",
                }}
                className="kiri-img"
              ></div>
              <div className="kiri-desc">
                <h3>Cetta Abipraya</h3>
                <img src="./arrow.png" alt="arrow" width={"40px"} />
              </div>
            </div>
          </div>
          <div className="destinasi-in destinasi-add">
            <div className="destinasi-kanan" data-aos="fade-up">
              <div
                style={{
                  background: "url(./spot2.jpg)",
                  backgroundSize: "cover",
                }}
                className="kanan-img"
              ></div>
              <div className="kanan-desc">
                <h3>Pancawara</h3>
                <img src="./arrow.png" alt="arrow" width={"40px"} />
              </div>
            </div>
            <div className="destinasi-kanan" data-aos="fade-up">
              <div
                style={{
                  background: "url(./spot3.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                }}
                className="kanan-img"
              ></div>
              <div className="kanan-desc">
                <h3>Camping</h3>
                <img src="./arrow.png" alt="arrow" width={"40px"} />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="banner2" data-aos="slide-up">
          <h4>
            Ayo jelajahi keindahan tersembunyi <br />
            Hutan Pinus Pengger
          </h4>
          <br />
          <button
            onClick={() => (location.href = "/reactuts/wip")}
            className="jelajah"
          >
            Jelajahi
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
