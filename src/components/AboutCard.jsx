import { forwardRef } from "react";

const AboutCard = forwardRef(function AboutCard({ text, tags = [] }, ref) {
  return (
    <div className="about-text flex flex-col gap-4 pb-12"  ref={ref} >
      <p className="text-1 leading-[1.4] text-dark">{text}</p>
      <div className="flex gap-4 text-1 text-light">
        {tags.map((tag, index) => (
          <p key={index} className="text-2 text-black ">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
});

export default AboutCard;
