import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Space from "./pages/space/Space.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import { useEffect, useRef, useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  const container = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);
  const handleClickOutside = (event) => {
    console.log('object')
    if (container.current && !container.current.contains(event.target)) {
      setShow(false);
    }
  };
  return (
    <div ref={container} className="overflow-hidden">
      <Header show={show} setShow={setShow} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space" element={<Space />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
