import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectCarousel from "../components/ProjectCarousel";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";

// Project Assets
import TAOMockup from "../assets/img/tao-mockup.jpg";
import OrangeMobile from "../assets/img/orange-mobile-mockup.png";
import Before from "../assets/img/TAO-before.jpg";
import After from "../assets/img/TAO-after.jpg";
import TAO1 from "../assets/img/tao-painting.jpg";
import TAO2 from "../assets/img/tao-values.jpg";
import TAO3 from "../assets/img/tao-services.jpg";
import TAO4 from "../assets/img/tao-guide.jpg";
import TAO5 from "../assets/img/tao-cta.jpg";
const projectImages = [TAO1, TAO2, TAO3, TAO4, TAO5];

const text1 = {
  tag: "brief",
  title: "Strengthen brand presence and credibility through design",
  texts: ["The Art Office is a promising startup offering immersive artistic experiences for businesses — but as a young company with a small team, they hadn’t yet invested in a strong visual identity. Their existing website was functional but lacked personality and failed to reflect the creativity at the heart of their work. The goal of this project was to help the founder shape a bold, professional brand presence and a compelling digital platform that would showcase their artistic expertise and strengthen their position within the art world."],
};

const text2 = {
  tag: "solution",
  title: "Creating a website around human stories and connections",
  texts: ["I began with the website — the startup’s main point of contact with clients — and approached it as a storytelling platform. By highlighting the founder’s personal connection to art and their network of emerging, independent artists, the website emphasizes authenticity, community, and local creative energy. More than just offering artistic experiences, The Art Office becomes a space for meaningful encounters — where businesses connect not only with art, but with the people behind it."],
};

const text3 = {
  tag: "design",
  title: "A visual language inspired by the art world",
  texts: ["The visual design draws inspiration from contemporary art spaces — clean, structured, yet expressive. The layout is open with carefully framed images that echo the feel of walking through an art gallery. Subtle straight lines in the background reference a blank canvas, hinting at creative potential while keeping the overall interface minimal. The typography is slim and modern, adding a sense of sophistication. The result is a refined visual system that lets the artwork and stories take center stage."],
};

export default function TheArtOffice() {
  const currentProjectId = 4;

  return (
    <Layout>
      <section className="space-y-24">
        <ProjectHeader currentProjectId={currentProjectId} />
        <ProjectText textID={text1}></ProjectText>
        <BeforeAfterSlider beforeImg={Before} afterImg={After} />
        <ProjectText textID={text2}></ProjectText>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-start-1 col-end-7 overflow-hidden rounded-xl bg-gray max-h-screen">
            <img src="https://kaobui.s3.eu-west-3.amazonaws.com/tao-image.jpg" alt="" />
          </div>
          <div className="col-start-7 col-end-13 overflow-hidden rounded-xl bg-gray max-h-screen">
            <img className="h-full object-cover" src={TAOMockup} alt="" />
          </div>
        </div>
        <ProjectText textID={text3}></ProjectText>
        <ProjectCarousel images={projectImages} />
        <RelatedProjects currentProjectId={currentProjectId} />
      </section>
    </Layout>
  );
}
