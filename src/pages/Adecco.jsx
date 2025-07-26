import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import RelatedProjects from "../components/RelatedProjects";
import ProjectText from "../components/ProjectText";
import ProjectTabs from "../components/ProjectTabs";
import AdeccoMockup from "../assets/img/adecco-mockup.jpg";
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
  const currentProjectId = 2;
  const resultsRef = useRef();

  useGSAP(
    () => {
      const textEl = resultsRef.current.querySelector("h2");
      const words = textEl.textContent.trim().split(" ");
      textEl.innerHTML = words
        .map(
          (word) =>
            `<span class="word inline-flex whitespace-nowrap overflow-hidden"><span class="inline-block overflow-hidden leading-[1.4] -mt-2">${word}&nbsp;</span></span>`,
        )
        .join("");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textEl,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });
      tl.fromTo(
        textEl.querySelectorAll(".word > span"),
        { opacity: 0, y: "100%" },
        {
          opacity: 1,
          y: 0,
          stagger: 0.025,
          duration: 0.75,
          ease: "expoScale(10,2.5,power2.out)",
        },
      );
    },
    { scope: resultsRef },
  );

  return (
    <Layout>
      <section className="space-y-24">
        <ProjectHeader currentProjectId={currentProjectId} />
        <ProjectText textID={text1}></ProjectText>
        <div className="grid grid-cols-12 gap-12 overflow-hidden rounded-xl bg-gray p-12 px-24">
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
        <ProjectText textID={text2}></ProjectText>
        <ProjectTabs />
        <ProjectText textID={text3}></ProjectText>
        <div className="overflow-hidden rounded-xl bg-gray">
          <img
            src={AdeccoMockup}
            alt="Adecco Mockup"
            className="h-[75vh] w-full rounded-xl object-cover"
          />
        </div>

        <div ref={resultsRef} className="grid grid-cols-12 gap-12">
          <div className="col-start-1 col-end-7 flex flex-col items-start justify-end gap-2">
            <p className="text-center text-0 font-bold text-black text-light uppercase">
              (results)
            </p>
            <h2 className="text-3 leading-[0.8]">
              Modernizing design and tackling information overload
            </h2>
          </div>
          <div className="col-start-7 col-end-13 flex flex-col justify-end gap-4"></div>
          <div className="col-start-1 col-end-7 flex flex-col justify-start gap-4">
            <p className="text-1 text-light">
              To measure the impact of the redesign, I analyzed behavioral data
              one year after launch, focusing on new user segments. The
              refreshed homepage showed a clear boost in engagement, especially
              in key areas like the job search bar, blog, and job category
              sections. These improvements demonstrate how the new design
              successfully guided users toward important actions.
            </p>
          </div>
          <div className="col-start-7 col-end-13 flex flex-col gap-6">
            <div className="flex gap-6">
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
            <div className="flex gap-6">
              <div className="flex flex-col rounded-xl bg-gray p-6">
                <p className="text-3 leading-[1.2]">+20%</p>
                <p className="text-1">
                  job search bar usage <em>(all devices)</em>
                </p>
              </div>
              <div className="flex flex-col rounded-xl bg-gray p-6">
                <p className="text-3 leading-[1.2]">2.8x</p>
                <p className="text-1">
                  interaction rate in the Job Category section <em>(all devices)</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        <RelatedProjects currentProjectId={currentProjectId} />
      </section>
    </Layout>
  );
}
