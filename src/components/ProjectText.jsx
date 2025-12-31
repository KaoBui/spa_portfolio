import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import RevealTitle from "../components/RevealTitle";

const ProjectText = ({ textID }) => {
  const texts = textID.texts;
  const projectTextRef = useRef();

  return (
    <div
      ref={projectTextRef}
      className="grid-cols-12 gap-12 space-y-8 lg:grid lg:space-y-0"
    >
      <div className="col-start-2 col-end-8 flex flex-col items-start justify-end gap-2">
        <p className="text-center text-0 font-bold text-black text-light uppercase">
          ({textID.tag})
        </p>
        <RevealTitle className="text-3 lg:text-4 leading-none tracking-tight text-black">
          {textID.title}{" "}
        </RevealTitle>
      </div>
      <div className="col-start-6 col-end-12 row-start-2 flex flex-col justify-end gap-4">
        {texts.map((text, index) => (
          <p key={index} className="text-1 lg:text-2 text-light">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectText;
