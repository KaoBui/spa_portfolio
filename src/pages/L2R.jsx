import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectCarousel from "../components/ProjectCarousel";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";
import RevealTitle from "../components/RevealTitle";

// Project Assets
import L2RMockup from "../assets/img/l2r-mockup.jpg";
import Before from "../assets/img/l2r-before.jpg";
import After from "../assets/img/l2r-after.jpg";
import Img1 from "../assets/img/l2r-1.jpg";
import Img2 from "../assets/img/l2r-2.jpg";
import Img3 from "../assets/img/l2r-3.jpg";
import Img4 from "../assets/img/l2r-4.jpg";
import Img5 from "../assets/img/l2r-5.jpg";
import typo1 from "../assets/img/l2r-typo1.png";
import typo2 from "../assets/img/l2r-typo2.png";
import palette1 from "../assets/img/l2r-palette-1.jpg";
import palette2 from "../assets/img/l2r-palette-2.jpg";
import mobiles from "../assets/img/l2r-mobiles.jpg";

const projectImages = [Img1, Img2, Img3, Img4, Img5];

const text1 = {
  tag: "brief",
  title: "Strengthen brand presence and credibility through design",
  texts: [
    "The Art Office is a promising startup offering immersive artistic experiences for businesses — but as a young company with a small team, they hadn’t yet invested in a strong visual identity. Their existing website was functional but lacked personality and failed to reflect the creativity at the heart of their work. The goal of this project was to help the founder shape a bold, professional brand presence and a compelling digital platform that would showcase their artistic expertise and strengthen their position within the art world.",
  ],
};

const text2 = {
  tag: "solution",
  title: "Creating a website around human stories and connections",
  texts: [
    "I began with the website — the startup’s main point of contact with clients — and approached it as a storytelling platform. By highlighting the founder’s personal connection to art and their network of emerging, independent artists, the website emphasizes authenticity, community, and local creative energy. More than just offering artistic experiences, The Art Office becomes a space for meaningful encounters — where businesses connect not only with art, but with the people behind it.",
  ],
};

const text3 = {
  tag: "design",
  title: "A visual language inspired by the art world",
  texts: [
    "The visual design draws inspiration from contemporary art spaces — clean, structured, yet expressive. The layout is open with carefully framed images that echo the feel of walking through an art gallery. Subtle straight lines in the background reference a blank canvas, hinting at creative potential while keeping the overall interface minimal. The typography is slim and modern, adding a sense of sophistication. The result is a refined visual system that lets the artwork and stories take center stage.",
  ],
};

export default function Les2Rives() {
  const currentProjectId = 1;
  return (
    <Layout>
      <section className="space-y-24">
        <ProjectHeader currentProjectId={currentProjectId} />
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-1 col-end-6 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (the challenge)
            </p>
            <RevealTitle className="text-3 leading-[1.2]">
              “Our website is not as good as our competitors’.”
            </RevealTitle>
          </div>
          <div className="col-start-7 col-end-13 space-y-2">
            <p className="line text-2 text-light">
              That was the concern Les 2 Rives shared with me when we started
              working together. Although they’ve been a trusted institution for
              nearly 20 years, their website didn’t reflect their expertise or
              their brand anymore. In a market becoming more competitive, they
              needed a new website to stay relevant.
            </p>
          </div>
        </div>
        <BeforeAfterSlider beforeImg={Before} afterImg={After} />
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-1 col-end-6 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (the approach)
            </p>
            <RevealTitle className="text-3 leading-[1.2]">
              Keep it clean and make it pop !
            </RevealTitle>
          </div>
          <div className="col-start-7 col-end-13 space-y-4">
            <p className="line text-2 text-light">
              I started by studying their competitors. Some were very playful,
              others extremely serious. Les 2 Rives needed something balanced.
            </p>
            <p className="line text-2 text-light">
              I aimed for a clean website with a classic layout — something easy
              to read and to navigate — then added animations to make it feel
              alive and modern. Just enough to make it pop, without losing the
              professionalism they care about.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-start-1 col-end-7 flex max-h-screen flex-col justify-center gap-16 overflow-hidden rounded-xl bg-gray p-12">
            <img className="max-w-3xl" src={typo2} alt="" />{" "}
            <img className="max-w-3xl" src={typo1} alt="" />
          </div>
          <div className="col-start-7 col-end-13 flex max-h-screen flex-col gap-16 overflow-hidden rounded-xl bg-gray p-12">
            <div className="space-y-4">
              <p className="text-1">Primary color</p>
              <img
                className="w-full rounded-2xl object-cover"
                src={palette1}
                alt=""
              />
            </div>
            <div className="space-y-4">
              <p className="text-1">Secondary color</p>
              <img
                className="w-full rounded-2xl object-cover"
                src={palette2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-1 col-end-6 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (the work)
            </p>
            <RevealTitle className="text-3 leading-[1.2]">
              The new website doesn’t just look nice — it works better too !
            </RevealTitle>
          </div>
          <div className="col-start-7 col-end-13 space-y-4">
            <p className="line text-2 text-light">
              Beyond the visual redesign, I worked with the team on content to
              improve traffic and conversions. I rebuilt the information
              architecture and optimized the pages so the site is clearer, more
              accessible, and easier to navigate.
            </p>
            <p className="line text-2 text-light">
              The result is a website that not only looks modern, but also
              speaks more effectively to the people who use it.
            </p>
          </div>
        </div>{" "}
        <ProjectCarousel images={projectImages} />
        <div className="grid grid-cols-12 gap-12">
          <div className="col-start-1 col-end-13 flex max-h-screen flex-col justify-center gap-16 overflow-hidden rounded-xl bg-gray">
            <img className="h-full object-cover"  src={mobiles} alt="" />
          </div>
        </div>
        <RelatedProjects currentProjectId={currentProjectId} />
      </section>
    </Layout>
  );
}
