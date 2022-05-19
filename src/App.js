import { Route, Routes } from "react-router-dom";
import { HederHome } from "./components/layout/HederHome/HederHome";
import { AboutUS } from "./components/Pages/AboutUS/AboutUS";
import { ContactUS } from "./components/Pages/ContactUS/ContactUS";
import { Home } from "./components/Pages/Home/Home";
import { NotFound } from "./components/Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <HederHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
