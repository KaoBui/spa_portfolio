import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectCarousel from "../components/ProjectCarousel";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";
import StepCard from "../components/StepCard";
import Before from "../assets/img/fakeoff-before.jpg";
import After from "../assets/img/fakeoff-after.jpg";
import RevealTitle from "../components/RevealTitle";

// Project Assets
import FakeOff1 from "../assets/img/fakeoff-1.jpg";
import FakeOff2 from "../assets/img/fakeoff-2.jpg";
import FakeOff3 from "../assets/img/fakeoff-3.jpg";
import FakeOff4 from "../assets/img/fakeoff-4.jpg";
import FakeOff5 from "../assets/img/fakeoff-5.jpg";
const projectImages = [FakeOff1, FakeOff2, FakeOff3, FakeOff4, FakeOff5];
import Typo from "../assets/img/fakeoff-typo.png";
import Palette1 from "../assets/img/fakeoff-palette-1.jpg";
import Palette2 from "../assets/img/fakeoff-palette-2.jpg";

export default function FakeOff() {
  const pinSectionRef = useRef();
  const pinColRef = useRef();
  const currentProjectId = 4;

  const text1 = {
    tag: "mission",
    title: "Identifying areas for improvement",
    texts: [
      "Fake Off, a French association led by journalists, fights misinformation among young audiences. At the start of this project, my mission was to propose a plan to enhance their website’s experience, ensuring it could better serve its audience while staying true to the brand’s serious and trustworthy identity. ",
    ],
  };

  const steps = [
    {
      step: 1,
      title: "research",
      objectives:
        "Explore how similar organizations — NGOs, educational platforms, and media literacy initiatives — communicate their missions and engage young audiences through their websites.",
      findings:
        "Common UX/UI patterns used across educational platforms are identified : bright visuals, reassuring tones, and clear action prompts. Fake Off stands out thanks to a strong and distinctive brand identity but feels visually disconnected from the educational sector.",
    },
    {
      step: 2,
      title: "audit",
      objectives:
        "Evaluate Fake Off’s existing website through a full UI/UX audit to identify weak points that could be improved, as well as strengths worth preserving. The focus was placed on accessibility, visual presentation, and user flows.",
      findings:
        "The audit revealed several issues impacting user experience: low color contrast, a dense and less readable typeface, and missing alt texts. The site also lacked strong visual hierarchy and clear calls-to-action.",
    },
    {
      step: 3,
      title: "define",
      objectives:
        "Synthesize research and audit findings to define clear design priorities that would improve the experience while staying true to Fake Off’s identity and mission",
      findings:
        "Two key priorities emerged. On the UI side: enhance accessibility and improve the overall aesthetic of the site. On the UX side: simplify the user journey by highlighting Fake Off’s core services through improved content hierarchy and clearer calls-to-action.",
    },
    {
      step: 4,
      title: "design",
      objectives:
        "Translate the defined priorities into a concrete design proposal that demonstrates how UI and UX improvements could enhance the overall experience while reinforcing the brand’s credibility",
      findings:
        "The final proposal included a revised color palette with better contrast, a new sans-serif typeface (DM Sans), and a clear typographic scale to improve readability. The layout was simplified to better structure information and highlight key services.",
    },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // For bigger screens, pin the left section
    mm.add("(min-width: 1024px)", () => {
      const pinHeight = pinColRef.current.offsetHeight;
      const endOffset = window.innerHeight / 2 + pinHeight;
      console.log(pinHeight, endOffset);
      const pinProject = ScrollTrigger.create({
        trigger: pinColRef.current,
        start: "50% 50%",
        endTrigger: pinSectionRef.current,
        end: `bottom top+=${endOffset}`,
        pin: pinColRef.current,
        scrub: true,
        pinSpacing: false,
      });
      return () => {
        pinProject.kill();
      };
    });
    return () => mm.revert();
  });

  return (
    <Layout>
      <section className="space-y-16 lg:space-y-36">
        <ProjectHeader currentProjectId={currentProjectId} />
        <ProjectText textID={text1}></ProjectText>
        <BeforeAfterSlider beforeImg={Before} afterImg={After} />

        <div
          ref={pinSectionRef}
          className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0"
        >
          <div
            ref={pinColRef}
            className="col-start-1 col-end-6 h-fit space-y-12"
          >
            <div className="flex flex-col items-start gap-2">
              <p className="text-center text-0 font-bold text-black text-light uppercase">
                (process)
              </p>
              <RevealTitle className="text-3 leading-[1.2]">
                My process to uncover the right design moves
              </RevealTitle>
            </div>
            <div>
              <p className="text-1 text-light">
                I began with competitor research and a full UX/UI audit. This
                allowed me to identify opportunities to improve accessibility,
                hierarchy, and engagement. Based on these findings, I developed
                a design strategy and prototype, focusing on making the platform
                more inclusive and user-friendly for both young audiences and
                educators.
              </p>
            </div>
          </div>
          <div className="col-start-7 col-end-13 flex flex-col justify-end gap-12">
            {steps.map((s, i) => (
              <StepCard key={i} {...s} />
            ))}
          </div>
        </div>
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-1 col-end-6 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (solution)
            </p>
            <RevealTitle className="text-3 leading-[1.2]">
              Rethinking the interface to feel lighter, clearer, and more human
            </RevealTitle>
          </div>
          <div className="col-start-7 col-end-13 space-y-2">
            <p className="text-1 text-light">
              The redesign proposal focused on three key areas of UI
              improvement: enhancing accessibility through better typography and
              contrast, softening the visual tone with a lighter and more
              balanced color palette, and introducing more engaging imagery to
              support the platform’s educational mission.
            </p>
            <p className="text-1 text-light">
              These adjustments aimed to make the interface more inclusive and
              approachable for young audiences, while preserving the credibility
              and seriousness that define Fake Off’s identity.
            </p>
          </div>
        </div>
        <div className="grid-cols-2 gap-12 space-y-6 lg:grid lg:space-y-0">
          <div className="flex flex-col gap-6 rounded-xl bg-gray p-6 lg:p-12">
            <img className="rounded-xl" src={Palette1} alt="" />
            <img className="rounded-xl" src={Palette2} alt="" />
          </div>
          <div className="flex items-center justify-center rounded-xl bg-gray p-6 lg:p-12">
            <img src={Typo} alt="" />
          </div>
        </div>
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-1 col-end-6 flex flex-col items-start gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (solution){" "}
            </p>
            <RevealTitle className="text-3 leading-[1.2]">
              Helping users find what matters faster
            </RevealTitle>
          </div>
          <div className="col-start-7 col-end-13">
            <p className="text-1 text-light">
              Beyond visual adjustments, I focused on improving the overall user
              experience. I restructured the homepage to make the most important
              services—such as workshops, tools, and educational content—easier
              to access. I added clearer entry points, simplified the layout,
              and introduced explicit, well-placed calls-to-action to better
              guide different types of users.
            </p>
          </div>
        </div>
        <ProjectCarousel images={projectImages} />
        <RelatedProjects currentProjectId={currentProjectId} />
      </section>
    </Layout>
  );
}
