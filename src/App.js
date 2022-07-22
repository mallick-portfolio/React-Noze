import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Space from "./pages/space/Space.jsx";
import Faq from "./components/FAQ/Faq.jsx";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />

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
