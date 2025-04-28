import { Routes, Route } from "react-router";
import Layout from "./sections/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./sections/Footer";
import Orange from "./pages/Orange";
import Adecco from "./pages/Adecco";
import TheArtOffice from "./pages/TheArtOffice";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="texture-overlay" />
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/orange-space" element={<Orange />} />
          <Route path="/projects/adecco" element={<Adecco />} />
          <Route path="/projects/the-art-office" element={<TheArtOffice />} />
        </Routes>
      </main>
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
