import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/_login";
import Home from "./pages/_home";
import Energy from "./pages/_energy";
import Transmission from "./pages/_transmission";
import Mark from "./pages/_mark";
import Model from "./pages/_model";
import Announcement from "./pages/_annoucement";
import DetailAnnouncement from "./pages/_detailAnnoucement";
import EditEnergy from "./components/_editEnergy";
import EditMark from "./components/_editMark";
import EditModel from "./components/_editModel";
import EditTransmission from "./components/_editTransmission";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/transmission" element={<Transmission />} />
        <Route path="/mark" element={<Mark />} />
        <Route path="/model" element={<Model />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route
          path="/detailAnnouncement/:idAnnonce"
          element={<DetailAnnouncement />}
        />
        <Route
          path="/EditEnergy/:idEnergy"
          element={<EditEnergy />}
        />
        <Route
          path="/EditTransmission/:idTransmission"
          element={<EditTransmission />}
        />
        <Route
          path="/EditMark/:idMark"
          element={<EditMark />}
        />
        <Route
          path="/EditModel/:idModel"
          element={<EditModel />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
