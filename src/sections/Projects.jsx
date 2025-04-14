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
    const triggers = [];
    cardRefs.current.forEach((card, index) => {
      const trigger = ScrollTrigger.create({
        trigger: card,
        start: "top center",
        onEnter: () => setActiveProject(projects[index]),
        onEnterBack: () => setActiveProject(projects[index]),
        id: `project-trigger-${index}`,
        name: "project-info-scroll",
      });
      triggers.push(trigger);
    });

    return () => {
      pinProject.kill();
      triggers.forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!titleRef.current) return
  
    gsap.fromTo(
      titleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }
    )
  }, [activeProject]);
  

  return (
    <section id="projects" className="relative grid grid-cols-12 gap-16 px-8">
      <div
        id="projects-left"
        className="col-start-1 col-end-6 flex h-screen flex-col justify-between gap-24 py-16"
      >
        <div className="flex flex-col gap-12">
          <h2 className="text-5 leading-[0.8] font-bold tracking-tighter">
            Selected works
          </h2>
          <div className="flex flex-col gap-2">
            {projects.map((project) => (
              <p key={project.id} className="project-index">
                <span>#{project.id}</span> {project.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8">
          <h4 ref={titleRef} className="text-3">
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
