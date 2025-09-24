import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectCarousel from "../components/ProjectCarousel";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";
// Project Texts
const text1 = {
  tag: "brief",
  title: "Help a coworking space reinforce their presence online",
  texts: [
    "Orange Space is a premium coworking space in Hanoi, Vietnam. Their mission is to offer an all-in-one office space service with clean aesthetics and efficiency. They needed a website that reflected their identity as a modern, productive workspace",
  ],
};
const text2 = {
  tag: "solution",
  title: "More than a modern website",
  texts: [
    "Their request was straightforward: a beautiful website. However, as I explored their needs, I realized there was an opportunity to create something far more impactful. The project was then about helping Orange Space build a digital identity that aligned with their core values and business goals. I then crafted a website that captured their identity at the same time seo-optimized, couppled with a SEO strategy.",
  ],
};
// Project Assets
import OrangeMobile from "../assets/img/orange-mobile-mockup.png";
import OrangeMockup from "../assets/img/orange-mockup.jpg";
import OrangeBefore from "../assets/img/orange-before.jpg";
import OrangeAfter from "../assets/img/orange-after.jpg";
import OrangeSpace from "../assets/img/orange-open-space.jpg";
import Orange1 from "../assets/img/orange-service-page.jpg";
import Orange2 from "../assets/img/orange-blog-post.jpg";
import Orange3 from "../assets/img/orange-feature-section.jpg";
import Orange4 from "../assets/img/orange-services.jpg";
import Orange5 from "../assets/img/orange-benefits.jpg";
const projectImages = [Orange1, Orange2, Orange3, Orange4, Orange5];

export default function Orange() {
  const currentProjectId = 4;
  return (
    <>
      <Layout>
        <section className="space-y-24">
          <ProjectHeader currentProjectId={currentProjectId} />
          <ProjectText textID={text1}></ProjectText>
          <div className="flex grid-cols-12 flex-col gap-12 lg:grid">
            <div className="relative col-start-1 col-end-7 overflow-hidden rounded-xl bg-gray">
              <img className="relative z-1" src={OrangeMobile} alt="" />
              <img
                className="absolute inset-0 h-full w-full object-cover filter brightness-15"
                src={OrangeSpace}
                alt=""
              />
            </div>
            <div className="col-start-7 col-end-13 overflow-hidden rounded-xl bg-gray">
              <img className="h-full object-cover" src={OrangeMockup} alt="" />
            </div>
          </div>
          <ProjectText textID={text2}></ProjectText>
          <BeforeAfterSlider beforeImg={OrangeBefore} afterImg={OrangeAfter} />
          <ProjectCarousel images={projectImages} />
          <RelatedProjects currentProjectId={currentProjectId} />
        </section>
      </Layout>
    </>
  );
}
