import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/SignIn";
import Rajasthani from "./components/Rajasthani"; // Import Rajasthani page
import Pichwai from "./components/Pichwai";
import Kalighat from "./components/Kalighat";
import Tanjore from "./components/Tanjore";
import DeccanKalam from "./components/DeccanKalam";
import MysorePainting from "./components/MysorePainting";
import Gond from "./components/Gond ";
import KeralaMural from "./components/KeralaMural";
import WarliPainting from "./components/WarliPainting";
import RoganArt from "./components/RoganArt";
export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/rajasthani" element={<Rajasthani />} /> {/* Add Rajasthani route */}
        <Route path="/pichwai" element={<Pichwai />} /> {/* Add Rajasthani route */}
         <Route path="/Kalighat" element={<Kalighat />} /> {/* Add Rajasthani route */}
          <Route path="/Tanjore" element={<Tanjore />} /> {/* Add Rajasthani route */}
          <Route path="/DeccanKalam" element={<DeccanKalam />} /> {/* Add Rajasthani route */}
          <Route path="/MysorePainting" element={<MysorePainting />} />
          <Route path="/Gond" element={<Gond />} />
          <Route path="/KeralaMural" element={<KeralaMural />} />
          <Route path="/WarliPainting" element={<WarliPainting />} />
          <Route path="/RoganArt" element={<RoganArt />} />
      </Routes>
    </BrowserRouter>
  );
}
