import Hero from "../sections/Hero";
import About from "../sections/About";
import  AboutNew from "../sections/AboutNew";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Layout from "../sections/Layout";

export default function Home() {
  return (
    <>
      <Layout >
        <Hero />
        <Projects />
        <AboutNew />
        <Contact />
      </Layout>
    </>
  );
}
