import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Space from "./pages/space/Space.jsx";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space" element={<Space />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
