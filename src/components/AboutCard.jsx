import { forwardRef } from "react";

const AboutCard = forwardRef(function AboutCard({ text, tags = [] }, ref) {
  return (
    <div className="about-text flex flex-col gap-4 pb-12" ref={ref}>
      <p className="text-1 2xl:text-2 leading-[1.4] text-light">{text}</p>
      <div className="flex gap-8">
        {tags.map((tag, index) => (
          <p key={index} className="text-1 text-dark md:text-2 2xl:text-3">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
});

export default AboutCard;
