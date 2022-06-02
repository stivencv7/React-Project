import { Route, Routes } from "react-router-dom";
import { HederHome } from "./components/layout/HederHome/HederHome";
//import { AboutUS } from "./components/Pages/AboutUS/AboutUS";
//import { ContactUS } from "./components/Pages/ContactUS/ContactUS";
import { Home } from "./components/Pages/Home/Home";
import { RickAndMorty } from "./components/Pages/RickAndMorty/RickAndMorty";
import { SeccionSend } from "./components/Pages/SeccionSend/SeccionSend";
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
        <Route path="/rickandMorty" element={<RickAndMorty />} />
        <Route path="/send" element={<SeccionSend />} />
      </Routes>
    </div>
  );
}

export default App;