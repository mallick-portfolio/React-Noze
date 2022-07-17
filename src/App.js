import "./App.css";
import Banner from "./components/Banner/Banner.jsx";
import Headline from "./components/Banner/Headline.jsx";
import Connected from "./components/connected/Connected.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Incredible from "./components/Incredible/Incredible .jsx";
import Monitor from "./components/monitor/Monitor.jsx";
import Reality from "./components/reality/Reality.jsx";
import Wonder from "./components/wonder/Wonder.jsx";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Headline />
      <Monitor />
      <Reality />
      <Incredible />
      <Wonder />
      <Faq />
      <Connected />
      <Footer />
    </div>
  );
}

export default App;
