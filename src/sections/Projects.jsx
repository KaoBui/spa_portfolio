import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import OrangeMockup from "../assets/img/orange-mockup.jpg";
import AdeccoMockup from "../assets/img/adecco-mockup.jpg";

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
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  // Optional: auto-switch title as cards mount
  useEffect(() => {
    setActiveProject(projects[0]);
  }, []);

  return (
    <section id="projects" className="relative grid grid-cols-12 gap-16 px-8">
      <div className="col-start-1 col-end-6 flex h-screen flex-col justify-between gap-24 py-16">
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
        <div className="flex flex-col gap-8 items-start">
          <h4 className="text-3">{activeProject.title}</h4>
          <Button href={activeProject.url}>SEE MORE</Button>
        </div>
      </div>
      <div
        id="project-img-col"
        className="col-start-7 col-end-13 flex flex-col gap-16"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
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
