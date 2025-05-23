import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectCarousel from "../components/ProjectCarousel";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";

const text1 = {
  tag: "challenge",
  title: "Modernizing design and tackling information overload",
  texts: [
    "Adecco is the world's largest recruitment agency, with their French homepage receiving tens of thousands of daily visitors. Despite being the market leader, their homepage faced two critical issues: an outdated design and overwhelming information density. Users were confronted with excessive text, multiple competing elements, and unclear visual hierarchy.",
    "My mission was to modernize the homepage design while significantly reducing information overload to create a cleaner, more intuitive job search experience.",
  ],
};

export default function Adecco() {
  const currentProjectId = 2;

  return (
    <Layout>
      <section className="space-y-24">
        <ProjectHeader currentProjectId={currentProjectId} />
        <ProjectText textID={text1}></ProjectText>
        <RelatedProjects currentProjectId={currentProjectId} />
      </section>
    </Layout>
  );
}
