import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Kontak() {
  const kontakAtas = [
    {
      logo: "./kontak1.png",
      judul: "0821 3575 3988",
      desc: "Dapatkan informasi kontak kami untuk pertanyaan atau bantuan yang Anda butuhkan.",
    },
    {
      logo: "./kontak2.png",
      judul: "Bantul,Yogyakarta",
      desc: "Temukan lokasi di mana kami berada dan bagaimana cara mencapai kami.",
    },
    {
      logo: "./kontak3.png",
      judul: "pinuspengger@gmail.com",
      desc: "Dapatkan informasi kontak kami untuk pertanyaan atau bantuan yang Anda butuhkan.",
    },
  ];

  const kontakMap = kontakAtas.map((e) => (
    <div className="k-atas-in">
      <img src={`./${e.logo}`} alt="logo" width={"80px"} />
      <br />
      <h2 className="h2">{e.judul}</h2>
      <p>{e.desc}</p>
    </div>
  ));

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [saran, setSaran] = useState("");

  function tombolSend() {
    alert(
      `terimakasih ${nama},saran anda : (${saran}) kami terima,dan kami akan skirim ke email ${email}`
    );
  }

  return (
    <>
      <Navbar />
      <div className="galeri-body">
        <div className="title">
          <h1 className="title-h1">KONTAK</h1>
          <p>
            Temukan semua cara untuk terhubung dengan kami dan <br /> dapatkan
            bantuan atau informasi yang Anda butuhkan di sini.
          </p>
        </div>
        <div className="kontak-atas">{kontakMap}</div>
        <br />
        <br />
        <br />

        <div className="kontak-bawah">
          <div className="k-bawah-isi">
            <span>
              <h2>Berikan saran anda</h2>
              <p>
                Bagikan pemikiran dan saran Anda untuk membantu kami
                meningkatkan <br />
                dan memberikan pengalaman terbaik untuk Anda.
              </p>
            </span>
            <br />
            <br />

            <form>
              <input
                type="text"
                placeholder="Nama..."
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <br />
              <input
                type="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <textarea
                placeholder="Saran..."
                value={saran}
                onChange={(e) => setSaran(e.target.value)}
              ></textarea>
              <br />
              <button className="form-button" onClick={tombolSend}>
                Send
              </button>
            </form>
          </div>
          <div className="k-bawah-isi">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0717604133806!2d110.39711177532514!3d-7.782216392237488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59c2e3382ed9%3A0xf700fca7fc88b019!2sJl.%20Ambar%20Madu%20236%2C%20Ambarukmo%2C%20Caturtunggal%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sid!2sid!4v1716885345420!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
