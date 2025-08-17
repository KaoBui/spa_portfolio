import { Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./sections/Footer";
import Orange from "./pages/Orange";
import Adecco from "./pages/Adecco";
import TheArtOffice from "./pages/TheArtOffice";
import FakeOff from "./pages/FakeOff";
import ScrollToTop from "./components/ScrollToTop";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const location = useLocation();

  return (
    <>
      <IntroAnimation />
      <div className="texture-overlay" />
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/orange-space" element={<Orange />} />
          <Route path="/projects/adecco" element={<Adecco />} />
          <Route path="/projects/the-art-office" element={<TheArtOffice />} />
          <Route path="/projects/fake-off" element={<FakeOff />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
