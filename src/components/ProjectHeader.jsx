import { projects } from "../projectsInfo";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectHeader = ({ currentProjectId }) => {
  const current = projects.find((p) => p.id === currentProjectId);
  const projectHeaderRef = useRef();
  const projectTitleRef = useRef();
  const projectInfoRef = useRef();
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

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

  const PlayIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="Play--Streamline-Iconoir"
      height="24"
      width="24"
    >
      <desc>Play Streamline Icon: https://streamlinehq.com</desc>
      <path
        d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947c0 0.4649 0.50592 0.7532 0.90588 0.5162l11.72312 -6.947c0.3921 -0.2324 0.3921 -0.8 0 -1.0324L6.90588 4.53682Z"
        fill="#000000"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );

  const PauseIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
    >
      <path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="#000000" />
    </svg>
  );

  return (
    <div ref={projectHeaderRef} className="flex flex-col gap-12 min-h-dvh justify-end lg:pt-56">
      <div
        ref={projectInfoRef}
        className="flex grid-cols-12 flex-col gap-4 lg:grid lg:gap-12"
      >
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

        <div className="col-start-10 col-end-13 flex flex-wrap content-end items-end justify-start lg:justify-end gap-4">
          {current.tags.map((tag, index) => (
            <p
              key={index}
              className="rounded-full border-1 border-dark px-2 py-1"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="relative z-10 overflow-hidden rounded-xl bg-gray p-2 lg:h-[75vh] lg:p-12 lg:px-24">
        <video
          ref={videoRef}
          id={`video-${current.id}`}
          autoPlay
          loop
          muted
          playsInline
          className="m-auto aspect-[16/9] object-cover lg:h-full"
        >
          <source src={current.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handleTogglePlay}
          className="absolute right-6 bottom-6 rounded-md bg-white/80 px-4 py-2 text-black backdrop-blur-md transition hover:bg-white"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;
