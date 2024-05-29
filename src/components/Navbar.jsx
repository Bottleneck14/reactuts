import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [ham, setHam] = useState(false);

  function hamButton() {
    setHam(!ham);
  }
  return (
    <>
      <div className="navbar">
        <Link to={"/reactuts/"}>
          <img className="logo" src="./logo.png" alt="logo" />
        </Link>
        <ul>
          <li>
            <NavLink end to={"/reactuts/"}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to={"/reactuts/Galeri"}>Galeri</NavLink>
          </li>
          <li>
            <NavLink to={"/reactuts/Kontak"}>Kontak</NavLink>
          </li>
        </ul>
        <img className="ham" src="./ham.png" alt="ham" onClick={hamButton} />
      </div>
      {ham && (
        <div className="ham-menu">
          <ul>
            <li>
              <NavLink end to={"/reactuts/"}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to={"/reactuts/Galeri"}>Galeri</NavLink>
            </li>
            <li>
              <NavLink to={"/reactuts/Kontak"}>Kontak</NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className="navbar-blank"></div>
    </>
  );
}
