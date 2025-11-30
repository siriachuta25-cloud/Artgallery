import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/SignIn"; // Optional: if you want to include SignIn

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <Nav />

      {/* Routes Configuration */}
      <Routes>
        <Route path="/" element={<Home />} />          {/* 🏠 Home Route */}
        <Route path="/gallery" element={<Gallery />} /> {/* 🎨 Gallery Route */}
        <Route path="/about" element={<About />} />     {/* ℹ️ About Route */}
        <Route path="/signin" element={<SignIn />} />   {/* 🔑 SignIn Route (optional) */}
      </Routes>
    </BrowserRouter>
  );
}
