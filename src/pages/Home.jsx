import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Layout from "../sections/Layout";

export default function Home() {
  return (
    <>
      <Layout >
        <Hero />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  );
}
