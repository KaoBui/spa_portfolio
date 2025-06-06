import { projects } from "../projectsInfo";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectHeader = ({ currentProjectId }) => {
  const current = projects.find((p) => p.id === currentProjectId);
  const projectHeaderRef = useRef();
  const projectTitleRef = useRef();
  const projectInfoRef = useRef();

  useGSAP(
    () => {
      const textEl = projectTitleRef.current;
      const words = current.title.split(" ");
      textEl.innerHTML = words
        .map(
          (word) =>
            `<span class="word inline-flex whitespace-nowrap overflow-hidden"><span class="inline-block overflow-hidden leading-[1.2] -mt-4 ">${word}&nbsp;</span></span>`,
        )
        .join("");
      const tl = gsap.timeline();
      tl.fromTo(
        textEl.querySelectorAll(".word > span"),
        { opacity: 0, y: "100%" },
        {
          opacity: 1,
          y: 0,
          stagger: 0.025,
          duration: 0.75,
          ease: "expoScale(10,2.5,power2.out)",
          delay: 2.15,
        },
      );
    },
    { scope: projectHeaderRef },
  );

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: projectHeaderRef.current,
            start: "top top",
            scrub: true,
            pin: projectInfoRef.current,
            pinSpacing: false,
          },
        })
        .to(projectInfoRef.current, {
          opacity: 0,
          ease: "power2.out",
          filter: "blur(10px)",
          scale: 0.9,
          duration: 1,
        });
    },
    { scope: projectHeaderRef },
  );

  return (
    <div ref={projectHeaderRef} className="flex flex-col gap-12 pt-56">
      <div ref={projectInfoRef} className="grid grid-cols-12 gap-12">
        <div className="col-start-1 col-end-9 flex flex-col gap-4">
          <div className="flex gap-2 text-1">
            <p>({current.year})</p>
            <p>({current.name})</p>
          </div>
          <h3
            ref={projectTitleRef}
            className="split-word text-4 leading-[0.8] font-bold tracking-tighter"
          >
            {current.title}
          </h3>
        </div>

        <div className="col-start-10 col-end-13 flex flex-wrap content-end items-end justify-end gap-4">
          {current.tags.map((tag, index) => (
            <p key={index} className="px-2 py-1 rounded-full border-1 border-dark">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="z-10 h-[75vh] overflow-hidden rounded-xl bg-gray p-12 px-24">
        <video
          id={`video-${current.id}`}
          autoPlay
          loop
          muted
          playsInline
          className="m-auto h-full object-cover aspect-[16/9]"
        >
          <source src={current.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ProjectHeader;
