import { useState, useEffect, useRef } from "react";
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
  const projectLeftRef = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // PIN FOR BIGGER SCREEN
    mm.add("(min-width: 1024px)", () => {
      const pinProject = ScrollTrigger.create({
        trigger: projectsRef.current,
        start: "top top",
        endTrigger: projectImgRef.current,
        end: "bottom bottom",
        pin: projectLeftRef.current,
        scrub: true,
        pinSpacing: false,
      });
      return () => {
        pinProject.kill();
      };
    });

    mm.add("(min-width: 1024px)", () => {
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

    // PIN FOR SMALLER SCREEN
    mm.add("(max-width: 1023px)", () => {
      const totalWidth =
        projectImgRef.current.scrollWidth - projectImgRef.current.offsetWidth;

      const sideScroll = gsap.to(cardRefs.current, {
        x: () => -totalWidth, // move left
        ease: "none",
        scrollTrigger: {
          trigger: projectsRef.current, // the wrapper containing the cards
          start: "top top",
          end: () => "+=" + totalWidth,
          scrub: true,
          pin: projectsRef.current, // pin left column
          pinSpacing: true, // no extra space after pinning
        },
      });
      ScrollTrigger.create({
        trigger: projectsRef.current,
        start: "top top",
        end: "+=" + totalWidth,
        scrub: true,
        onUpdate: (self) => {
          const scrollX = self.progress * totalWidth; // how far we scrolled in px

          cardRefs.current.forEach((card, index) => {
            const cardStart = card.offsetLeft; // px from container start
            const cardEnd = cardStart + card.offsetWidth;

            if (scrollX >= cardStart && scrollX < cardEnd) {
              setActiveProject(projects[index]);
            }
          });
        },
      });

      return () => {
        sideScroll.kill();
      };
    });

    return () => mm.revert();
  });

  // TITLE ANIMATION
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
          stagger: 0.025,
          duration: 0.35,
          ease: "expoScale(10,2.5,power2.out)",
        },
      );
    },
    { dependencies: [activeProject] },
  );

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="relative grid-cols-12 gap-16 lg:grid"
    >
      <div
        ref={projectLeftRef}
        className="col-span-full col-start-1 col-end-7 flex flex-col gap-4 py-6 md:h-screen md:justify-between md:py-8 lg:py-12 2xl:py-12 3xl:py-16"
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1 md:flex-row">
            <p className="text-2 font-bold">1</p>
            <h2 className="text-4 leading-[0.8] font-bold tracking-tighter md:text-5">
              Selected works
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p key={activeProject.id} className="text-1 3xl:text-2">
              <span className="inline-block w-[40px]">#{activeProject.id}</span>{" "}
              {activeProject.name}
            </p>
          </div>
        </div>
        <div className="hidden flex-col items-start justify-end gap-8 lg:flex">
          <h4 ref={titleRef} className="text-2 leading-[0.8] 2xl:text-3">
            {activeProject.title}
          </h4>
          <Button href={activeProject.url}>SEE MORE</Button>
        </div>
      </div>
      <div
        id="project-right"
        ref={projectImgRef}
        className="col-span-full flex gap-12 overflow-hidden opacity-100 md:gap-16 lg:col-start-7 lg:col-end-13 lg:flex-col"
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
