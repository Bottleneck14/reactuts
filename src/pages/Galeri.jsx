import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Galeri() {
  const galeriAngka = [];

  for (let i = 1; i <= 21; i++) {
    galeriAngka.push(i.toString());
  }

  const galeriMap = galeriAngka.map((e) => (
    <img data-aos="fade-up" src={`./galeri/${e}.png`} alt="galeri" />
  ));

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="galeri-body">
        <div className="title">
          <h1 className="title-h1">GALERI</h1>
          <p>
            Temukan berbagai keseruan <br /> dan keindahan hutan pinus pengger
          </p>
        </div>
        <div className="gambar">{galeriMap}</div>
      </div>
      <Footer />
    </>
  );
}
