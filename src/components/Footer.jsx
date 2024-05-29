import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-body">
        <div className="footer">
          <div className="footer-atas">
            <div className="f-atas-kiri">
              <img src="./logo.png" alt="" />
            </div>
            <div className="f-atas-kanan">
              <ul>
                <li style={{ fontWeight: "700" }}>Tentang</li>
                <li>
                  <br />
                </li>
                <li>
                  <Link to={"/Wip"}>Visi & Misi</Link>
                </li>
                <li>
                  <Link to={"/Wip"}>Produk Layanan</Link>
                </li>
                <li>
                  <Link to={"/Wip"}>Kontak</Link>
                </li>
              </ul>
              <ul>
                <li style={{ fontWeight: "700" }}>FAQ</li>
                <li>
                  <br />
                </li>
                <li>
                  <Link to={"/Wip"}>Personal Trip</Link>
                </li>
                <li>
                  <Link to={"/Wip"}>Group Trip</Link>
                </li>
                <li>
                  <Link to={"/Wip"}>Payment</Link>
                </li>
              </ul>
              <ul>
                <li style={{ fontWeight: "700" }}>Info</li>
                <li>
                  <br />
                </li>
                <li>
                  <Link to={"/Wip"}>Terms of use</Link>
                </li>
                <li>
                  <Link to={"/Wip"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bawah">
            <p>
              © 2024 Hutan Pinus Pengger. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <div className="medsos">
              <img
                onClick={() => window.open("https://www.facebook.com/")}
                src="./sm1.png"
                alt="medsos"
                width={"40px"}
              />
              <img
                onClick={() => window.open("https://www.twitter.com/")}
                src="./sm2.png"
                alt="medsos"
                width={"40px"}
              />
              <img
                onClick={() => window.open("https://web.whatsapp.com/")}
                src="./sm3.png"
                alt="medsos"
                width={"40px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
