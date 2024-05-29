import { Route, Routes } from "react-router-dom";
import "./App.css";
import Beranda from "./pages/Beranda";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import Wip from "./pages/Wip";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/reactuts/" element={<Beranda />}></Route>
        <Route path="/reactuts/galeri" element={<Galeri />}></Route>
        <Route path="/reactuts/kontak" element={<Kontak />}></Route>
        <Route path="/reactuts/wip" element={<Wip />}></Route>
        <Route path="/reactuts/*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
