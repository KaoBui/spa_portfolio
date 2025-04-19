import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import OrangeMockup from "../assets/img/orange-mockup.jpg";
import AdeccoMockup from "../assets/img/adecco-mockup.jpg";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "Orange Space",
    title: "Help a coworking space reinforce their presence online",
    url: "/projects/orange-space",
    imageSrc: OrangeMockup,
    tags: ["Web Design", "Web Development", "SEO"],
  },
  {
    id: 2,
    name: "Adecco France",
    title: "Optimize homepage for the market leader platform",
    url: "/projects/adecco",
    imageSrc: AdeccoMockup,
    tags: ["UX Research", "Web Development", "Accessibility"],
  },
  {
    id: 3,
    name: "The Art Office",
    title: "Build a brand identity for an art startup",
    url: "/projects/orange-space",
    imageSrc: OrangeMockup,
    tags: ["Web Design", "Web Development", "SEO"],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const pinProject = ScrollTrigger.create({
      trigger: "#projects",
      start: "top top",
      endTrigger: "#project-img-col",
      end: "bottom bottom",
      pin: "#projects-left",
      scrub: true,
      pinSpacing: false,
    });
    const projectTriggers = [];
    cardRefs.current.forEach((card, index) => {
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
      pinProject.kill();
      projectTriggers.forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;

    const el = titleRef.current;
    const words = activeProject.title.split(" ");

    el.innerHTML = words
      .map((word) => `<span class="word inline-block whitespace-nowrap">${word}&nbsp;</span>`)
      .join("");
    gsap.fromTo(
      el.querySelectorAll(".word"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.25,
        ease: "power2.out",
      }
    );
  }, [activeProject]);

  return (
    <section id="projects" className="relative grid grid-cols-12 gap-16">
      <div
        id="projects-left"
        className="col-start-1 col-end-6 flex h-screen flex-col justify-between py-16"
      >
        <div className="flex flex-col gap-12">
          <div className="flex gap-1">
            <p className="text-2 font-bold">1</p>
            <h2 className="text-5 leading-[0.8] font-bold tracking-tighter">
              Selected works
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p key={activeProject.id} className="text-1">
              <span className="w-[40px] inline-block">#{activeProject.id}</span> {activeProject.name}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end gap-8">
          <h4 ref={titleRef} className="text-3 leading-none">
            {activeProject.title}
          </h4>
          <Button href={activeProject.url}>SEE MORE</Button>
        </div>
      </div>
      <div
        id="project-img-col"
        className="col-start-7 col-end-13 flex flex-col gap-16"
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
