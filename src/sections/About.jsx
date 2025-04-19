import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutCard from "../components/AboutCard";
gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  {
    text: "I began my journey in marketing. This foundation shaped the way I approach every project: with a focus on users, performance, and results. It’s what drives my need to create work that not only looks good, but works. My marketing background anchors my design thinking in real needs and measurable impact.",
    tags: ["#SEO", "#paid advertising"],
  },
  {
    text: "What started as a love for clean, beautiful PowerPoint slides turned into a growing curiosity for how visuals shape understanding. That curiosity led me to web and UX design, where structure meets emotion, and aesthetics serve purpose. I’m drawn to creating designs that not only look good—but make an impact.",
    tags: ["#UX Design", "#Web Design"],
  },
];

export default function About() {
  useEffect(() => {
    const paragraphs = gsap.utils.toArray(".about-text");
    const lastParagraph = paragraphs[paragraphs.length - 1];
    const aboutTitle = document.getElementById("about-title");
    const aboutTitlleWrapper = document.getElementById("about-title-wrapper");

    const pinAbout = ScrollTrigger.create({
      trigger: "#about",
      start: "top top",
      endTrigger: "#about-description",
      end: "bottom 50%",
      pin: aboutTitlleWrapper,
      scrub: true,
      pinSpacing: false,
    });

    const aboutTitleAnimation = gsap.fromTo(
      aboutTitle,
      { gap: "8rem", yPercent: 10 },
      {
        gap: "0rem",
        yPercent: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutTitle,
          start: "top 80%",
          endTrigger: "#about",
          end: "top top",
          scrub: 1,
        },
      },
    );
    return () => {
      pinAbout.kill();
      aboutTitleAnimation.scrollTrigger?.kill();
    };
  }, []);
  return (
    <section
      id="about"
      className="relative grid h-screen grid-rows-[1fr_auto]"
    >
      <div
        id="about-title-wrapper"
        className="col-span-full flex gap-1 lg:py-12"
      >
        <p className="text-2 font-bold">2</p>
        <h2
          id="about-title"
          className="flex flex-col gap-8 text-5 leading-none font-bold tracking-tighter"
        >
          <span>Rooted in marketing,</span>
          <span>shaped by design,</span>
          <span>driven by code.</span>
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-16">
        <div className="col-start-1 col-end-4"></div>
        <div className="col-start-7 col-end-13 lg:py-8 xl:py-10">
          <div id="about-description" className="relative">
            {paragraphs.map((paragraph, i) => (
              <AboutCard key={i} text={paragraph.text} tags={paragraph.tags} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
