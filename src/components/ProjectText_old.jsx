import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import RevealTitle from "./RevealTitle";

const ProjectTextOld = ({ textID }) => {
  const texts = textID.texts;
  const projectTextRef = useRef();

  // useGSAP(
  //   () => {
  //     const textEl = projectTextRef.current.querySelector("h2");
  //     const words = textID.title.split(" ");
  //     textEl.innerHTML = words
  //       .map(
  //         (word) =>
  //           `<span class="word inline-flex whitespace-nowrap overflow-hidden"><span class="inline-block overflow-hidden leading-[1.4] -mt-2">${word}&nbsp;</span></span>`,
  //       )
  //       .join("");
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: textEl,
  //         start: "top 90%",
  //         toggleActions: "play none none reverse",
  //       },
  //     });
  //     tl.fromTo(
  //       textEl.querySelectorAll(".word > span"),
  //       { opacity: 0, y: "100%" },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.025,
  //         duration: 0.75,
  //         ease: "expoScale(10,2.5,power2.out)",
  //       },
  //     );
  //   },
  //   { scope: projectTextRef },
  // );

  return (
    <div
      ref={projectTextRef}
      className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0"
    >
      <div className="col-start-1 col-end-7 flex flex-col items-start justify-end gap-2">
        <p className="text-center text-0 font-bold text-black text-light uppercase">
          ({textID.tag})
        </p>
        <RevealTitle className="text-3 leading-[1.2]">
          {textID.title}{" "}
        </RevealTitle>
      </div>
      <div className="col-start-7 col-end-13 flex flex-col justify-end gap-4">
        {texts.map((text, index) => (
          <p key={index} className="text-1 text-light">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectTextOld;
