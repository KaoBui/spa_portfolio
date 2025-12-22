import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";
import ProjectTabs from "../components/ProjectTabs";
import AdeccoMockup from "../assets/img/adecco-mockup.jpg";
import RevealTitle from "../components/RevealTitle";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const text1 = {
  tag: "challenge",
  title: "Improving a high-traffic entry point",
  texts: [
    "Adecco is the world's largest recruitment agency, with their French homepage receiving tens of thousands of daily visitors. Despite being the market leader, their homepage faced two critical issues: an outdated design and overwhelming information density. Users were confronted with excessive text, multiple competing elements, and unclear visual hierarchy.",
    "My mission was to modernize the homepage design while significantly reducing information overload to create a cleaner, more intuitive job search experience.",
  ],
};

const text2 = {
  tag: "approach",
  title: "Research, prototyping, testing",
  texts: [
    "Starting with benchmarking and behavioral data analysis, I identified key usability issues on the homepage. Based on these insights, I designed an interactive mockup focused on clarity and usability. I then tested the new version with internal team and real users through A/B testing and interviews, refining the design to better meet user expectations.",
  ],
};

const text3 = {
  tag: "solution",
  title: "Modernizing design and tackling information overload",
  texts: [
    "I restructured the homepage by focusing on clarity, simplicity, and user intent. Each section was redesigned using UX principles and real insights. The new layout prioritizes key actions, reduces cognitive load, and offers a cleaner, more accessible, and visually modern experience that better guides users through the site.",
  ],
};

export default function Adecco() {
  const currentProjectId = 3;

  return (
    <Layout>
      <section className="space-y-16 lg:space-y-36">
        <ProjectHeader currentProjectId={currentProjectId} />
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-2 col-end-8 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (the challenge)
            </p>
            <RevealTitle className="text-4 leading-[1.2] text-black">
              Improving a high-traffic entry point
            </RevealTitle>
          </div>
          <div className="col-start-6 col-end-12 row-start-2 space-y-2">
            <p className="text-2 text-neutral-800">
              With tens of thousands of users landing on Adecco France’s
              homepage each day, the experience had become cluttered,
              text-heavy, and hard to navigate.
            </p>
            <p className="text-2 text-neutral-800">
              My mission: modernize the design, cut the noise, and rebuild a
              clearer path for users to find what they need.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-12 overflow-hidden rounded-xl bg-gray p-6 lg:p-12 lg:px-24">
          <div className="col-start-2 col-end-12 flex">
            <div className="relative flex aspect-square flex-1">
              <svg
                viewBox="0 0 100 100"
                className="absolute top-0 left-0 mb-4 h-auto w-full"
              >
                <polygon
                  points="50,0 100,50 50,100 0,50"
                  fill="var(--color-gray-4)"
                />
              </svg>
              <div className="z-1 flex flex-1 flex-col border-l border-dotted border-gray-3 px-4 pt-[50%]">
                <p className="pb-6 text-center text-2">Discover</p>
                <ul className="list-disc pl-4 text-1">
                  <li>Conducted competitive benchmarking</li>
                  <li>Analyzed user behavior using ContentSquare</li>
                  <li>Reviewed current UX best practices</li>
                </ul>
              </div>
              <div className="z-1 flex flex-1 flex-col border-l border-dotted border-gray-3 px-4 pt-[50%]">
                <p className="pb-6 text-center text-2">Define</p>
                <ul className="list-disc pl-4 text-1">
                  <li>Synthesized findings to identify issues and insights</li>
                  <li>Identify redesign project goals</li>
                </ul>
              </div>
            </div>{" "}
            <div className="relative flex aspect-square flex-1">
              <svg
                viewBox="0 0 100 100"
                className="absolute top-0 left-0 mb-4 h-auto w-full"
              >
                <polygon
                  points="50,0 100,50 50,100 0,50"
                  fill="var(--color-gray-4)"
                />
              </svg>
              <div className="z-1 flex flex-1 flex-col border-l border-dotted border-gray-3 px-4 pt-[50%]">
                <p className="pb-6 text-center text-2">Develop</p>
                <ul className="list-disc pl-4 text-1">
                  <li>
                    Designed a high-fidelity interactive mockup based on
                    research insights
                  </li>
                </ul>
              </div>
              <div className="z-1 flex flex-1 flex-col border-x border-dotted border-gray-3 px-4 pt-[50%]">
                <p className="pb-6 text-center text-2">Deliver</p>
                <ul className="list-disc pl-4 text-1">
                  <li>Gather feedback from internal team</li>
                  <li>
                    Conducted interviews and A/B testing sessions with users
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-2 col-end-8 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (the approach)
            </p>
            <RevealTitle className="text-4 leading-[1.2] text-black">
              Research, prototyping, testing
            </RevealTitle>
          </div>
          <div className="col-start-6 col-end-12 row-start-2 space-y-2">
            <p className="text-2 text-neutral-800">
              After benchmarking and analyzing user behavior, I identified the
              homepage’s key usability problems. I created a clearer, more
              intuitive prototype, then tested it internally and with real
              users. A/B testing and interviews helped refine the design to
              match user needs.
            </p>
          </div>
        </div>
        <ProjectTabs />
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-2 col-end-8 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (the solution)
            </p>
            <RevealTitle className="text-4 leading-[1.2] text-black">
              Cutting the noise to let users find their way
            </RevealTitle>
          </div>
          <div className="col-start-6 col-end-12 row-start-2 space-y-2">
            <p className="text-2 text-neutral-800">
              The original homepage tried to say everything at once. I
              redesigned it to say only what mattered. By focusing on user
              intent and simplifying each section, the new version feels
              lighter, clearer, and far easier to navigate.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl bg-gray">
          <img
            src={AdeccoMockup}
            alt="Adecco Mockup"
            className="h-[75vh] w-full rounded-xl object-cover"
          />
        </div>
        <div className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0">
          <div className="col-start-2 col-end-8 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (the results)
            </p>
            <RevealTitle className="text-4 leading-[1.2] text-black">
              Did the redesign deliver results?
            </RevealTitle>
          </div>
          <div className="col-start-6 col-end-12 row-start-2 space-y-2">
            <p className="text-2 text-neutral-800">
              A year after launch, I analyzed behavioral data to see if the
              redesign worked.
            </p>
            <p className="text-2 text-neutral-800">
              At first glance, the redesign didn’t bring major changes to
              overall site performance. But looking deeper into the data, I
              found higher user engagement in key areas like the search bar,
              blog, and job categories. The redesign didn’t transform
              everything, but it did make the experience clearer and more
              intuitive for users.
            </p>
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex flex-col rounded-xl bg-gray p-6">
                  <p className="text-3 leading-[1.2]">3x</p>
                  <p className="text-1">
                    users reaching the end of the page <em>(desktop)</em>
                  </p>
                </div>
                <div className="flex flex-col rounded-xl bg-gray p-6">
                  <p className="text-3 leading-[1.2]">3.2x</p>
                  <p className="text-1">
                    clicks in the Blog section <em>(all devices)</em>{" "}
                  </p>
                </div>
                <div className="flex flex-col rounded-xl bg-gray p-6">
                  <p className="text-3 leading-[1.2]">+68%</p>
                  <p className="text-1">
                    clicks in the Featured Tools section <em>(desktop)</em>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex flex-col rounded-xl bg-gray p-6">
                  <p className="text-3 leading-[1.2]">+20%</p>
                  <p className="text-1">
                    job search bar usage <br /> <em>(all devices)</em>
                  </p>
                </div>
                <div className="flex flex-col rounded-xl bg-gray p-6">
                  <p className="text-3 leading-[1.2]">2.8x</p>
                  <p className="text-1">
                    interaction rate in the Job Category section <br />
                    <em>(all devices)</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProjects currentProjectId={currentProjectId} />
      </section>
    </Layout>
  );
}
