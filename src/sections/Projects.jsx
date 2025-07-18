import { useState, useEffect, useRef, use } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { projects } from "../projectsInfo";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const cardRefs = useRef([]);
  const titleRef = useRef();
  const projectsRef = useRef();
  const projectImgRef = useRef();

  useGSAP(() => {
    // Pinning logic
    const pinProject = ScrollTrigger.create({
      trigger: projectsRef.current,
      start: "top top",
      endTrigger: "#project-right",
      end: "bottom bottom",
      pin: "#projects-left",
      scrub: true,
      pinSpacing: false,
    });
    return () => {
      pinProject.kill();
    };
  });

  useEffect(() => {
    const projectTriggers = [];
    cardRefs.current?.forEach((card, index) => {
      const trigger = ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveProject(projects[index]),
        onEnterBack: () => setActiveProject(projects[index]),
        id: `project-trigger-${index}`,
        name: "project-info-scroll",
      });
      projectTriggers.push(trigger);
    });
    return () => {
      projectTriggers.forEach((t) => t.kill());
    };
  });

  useGSAP(
    () => {
      if (!titleRef.current) return;

      const el = titleRef.current;
      const words = activeProject.title.split(" ");

      el.innerHTML = words
        .map(
          (word) =>
            `<span class="word inline-block whitespace-nowrap overflow-hidden"><span class="inline-block overflow-hidden leading-[1.2]">${word}&nbsp;</span></span>`,
        )
        .join("");
      gsap.fromTo(
        el.querySelectorAll(".word > span"),
        { opacity: 0, y: "100%" },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.25,
          ease: "power2.out",
        },
      );
    },
    { dependencies: [activeProject] },
  );

  // useGSAP(
  //   () => {
  //     gsap.from(
  //       projectImgRef.current,
  //       {
  //         opacity: 0,
  //         ease: "power2.out",
  //         duration: 0.5,
  //         scrollTrigger: {
  //           trigger: projectImgRef.current,
  //           start: "top 25%",
  //           toggleActions: "play reverse play reverse",
  //           markers: true,
  //         },
  //       },
  //     );
  //   },
  //   { scope: projectImgRef },
  // );

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="relative md:grid grid-cols-12 gap-16"
    >
      <div
        id="projects-left"
        className="col-span-full md:col-start-1 md:col-end-7 flex h-screen flex-col justify-between py-16"
      >
        <div className="flex flex-col gap-12">
          <div className="flex gap-1">
            <p className="text-2 font-bold">1</p>
            <h2 className="text-3 md:text-5 leading-[0.8] font-bold tracking-tighter">
              Selected works
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p key={activeProject.id} className="text-1 2xl:text-2">
              <span className="inline-block w-[40px]">#{activeProject.id}</span>{" "}
              {activeProject.name}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end gap-8">
          <h4 ref={titleRef} className="text-3 leading-[0.8]">
            {activeProject.title}
          </h4>
          <Button href={activeProject.url}>SEE MORE</Button>
        </div>
      </div>
      <div
        id="project-right"
        ref={projectImgRef}
        className="col-span-full md:col-start-7 md:col-end-13 flex flex-col gap-16 opacity-100"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            title={project.title}
            url={project.url}
            imageSrc={project.imageSrc}
            tags={project.tags}
            alt={`${project.name} Project Mockup`}
          />
        ))}
      </div>
    </section>
  );
}
