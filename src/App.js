import { Route, Routes } from "react-router-dom";
import { HederHome } from "./components/layout/HederHome/HederHome";
//import { AboutUS } from "./components/Pages/AboutUS/AboutUS";
//import { ContactUS } from "./components/Pages/ContactUS/ContactUS";
import { Home } from "./components/Pages/Home/Home";
import { Setup } from "./components/Pages/Setup/Setup";
//import { NotFound } from "./components/Pages/NotFound/NotFound";
//import React, { useState } from "react";



function App() {
  return (
    <div id="color" className="App">
      <HederHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configuracion" element={<Setup />} />
      </Routes>
    </div>
  );
}

export default App;