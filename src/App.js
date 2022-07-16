import "./App.css";
import Banner from "./components/Banner/Banner.jsx";
import Headline from "./components/Banner/Headline.jsx";
import Connected from "./components/connected/Connected.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Headline />
      <Connected />
      <Footer />
    </div>
  );
}

export default App;
