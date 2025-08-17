import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectCarousel from "../components/ProjectCarousel";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";
import StepCard from "../components/StepCard";
import Before from "../assets/img/fakeoff-before.jpg";
import After from "../assets/img/fakeoff-after.jpg";

// Project Assets
import FakeOff1 from "../assets/img/fakeoff-1.jpg";
import FakeOff2 from "../assets/img/fakeoff-2.jpg";
import FakeOff3 from "../assets/img/fakeoff-3.jpg";
import FakeOff4 from "../assets/img/fakeoff-4.jpg";
import FakeOff5 from "../assets/img/fakeoff-5.jpg";
const projectImages = [FakeOff1, FakeOff2, FakeOff3, FakeOff4, FakeOff5];

export default function FakeOff() {
  const currentProjectId = 4;

  const text1 = {
    tag: "brief",
    title: "Defining how to improve Fake Off’s website",
    texts: [
      "Fake Off, a French association led by journalists, fights misinformation among young audiences. At the start of this project, my mission was to propose a plan to enhance their website’s experience, ensuring it could better serve its audience while staying true to the brand’s serious and trustworthy identity. ",
    ],
  };
  const text2 = {
    tag: "process",
    title: "Mapping the path to a better experience",
    texts: [
      "I began with competitor research and a full UX/UI audit. This allowed me to identify opportunities to improve accessibility, hierarchy, and engagement. Based on these findings, I developed a design strategy and prototype, focusing on making the platform more inclusive and user-friendly for both young audiences and educators.",
    ],
  };
  const text3 = {
    tag: "solution",
    title: "Turning insights into improvements",
    texts: [
      "I began with competitor research and a full UX/UI audit. This allowed me to identify opportunities to improve accessibility, hierarchy, and engagement. Based on these findings, I developed a design strategy and prototype, focusing on making the platform more inclusive and user-friendly for both young audiences and educators.",
    ],
  };

  const steps = [
    {
      step: 1,
      title: "research",
      objectives:
        "Understand the media education landscape and Fake Off’s position within it.",
      findings:
        "Identified direct competitors (media literacy NGOs) and indirect ones (digital awareness groups). Fake Off stood out for its strong brand identity but risked feeling too formal for younger audiences.",
    },
    {
      step: 2,
      title: "audit",
      objectives:
        "Evaluate Fake Off’s website experience from a UI/UX perspective.",
      findings:
        "Discovered accessibility issues (contrast, typography), lack of clear calls-to-action, and a heavy, dark visual tone that limited engagement.",
    },
    {
      step: 3,
      title: "define",
      objectives:
        "Set priorities for improving the website without changing its core identity.",
      findings:
        "Established three key goals: enhance accessibility, create a friendlier yet credible visual tone, and simplify navigation to highlight services.",
    },
    {
      step: 4,
      title: "design",
      objectives:
        "Translate insights into a concrete improvement plan and prototype.",
      findings:
        "Proposed a refined design system with accessible typography and color palette, lighter visual tone, and a homepage mockup showcasing clearer journeys and CTAs",
    },
  ];

  return (
    <Layout>
      <section className="space-y-24">
        <ProjectHeader currentProjectId={currentProjectId} />
        <ProjectText textID={text1}></ProjectText>
        <BeforeAfterSlider beforeImg={Before} afterImg={After} />
        <ProjectText textID={text2}></ProjectText>
        <section className="flex gap-6">
          {steps.map((s, i) => (
            <StepCard key={i} {...s} />
          ))}
        </section>
        <ProjectText textID={text3}></ProjectText>
        <ProjectCarousel images={projectImages} />
        <RelatedProjects currentProjectId={currentProjectId} />
      </section>
    </Layout>
  );
}
