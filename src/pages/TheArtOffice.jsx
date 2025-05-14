import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectCarousel from "../components/ProjectCarousel";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";

// Project Assets
import Before from "../assets/img/TAO-before.jpg";
import After from "../assets/img/TAO-after.jpg";

const text1 = {
  tag: "solution",
  title: "More than a modern website",
  text: "Their request was straightforward: a beautiful website. However, as I explored their needs, I realized there was an opportunity to create something far more impactful. The project was then about helping Orange Space build a digital identity that aligned with their core values and business goals. I then crafted a website that captured their identity at the same time seo-optimized, couppled with a SEO strategy.",
};

export default function TheArtOffice() {
  const currentProjectId = 3;

  return (
    <Layout>
      <section className="space-y-24">
        <ProjectHeader currentProjectId={currentProjectId} />
        <ProjectText textID={text1}></ProjectText>
        <BeforeAfterSlider beforeImg={Before} afterImg={After} />
      </section>
    </Layout>
  );
}
