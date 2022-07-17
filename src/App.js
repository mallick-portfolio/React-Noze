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
import TheMold from "./components/theMold/TheMold.jsx";
import Wonder from "./components/wonder/Wonder.jsx";
import TheVirus from "./components/theVirus/TheVirus.jsx";
import Ordinary from "./components/ordinary/Ordinary.jsx";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Headline />
      <Ordinary />
      <TheVirus />
      <TheMold />
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
