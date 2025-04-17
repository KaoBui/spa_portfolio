import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./sections/Footer";
import Orange from "./pages/Orange";
import Adecco from "./pages/Adecco";
import TheArtOffice from "./pages/TheArtOffice";

function App() {
  return (
    <>
      <div className="texture-overlay" />
      <Navbar />
      <main className="px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/orange-space" element={<Orange />} />
          <Route path="/projects/adecco" element={<Adecco />} />
          <Route path="/projects/the-art-office" element={<TheArtOffice />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
