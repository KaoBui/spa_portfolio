import React, { forwardRef } from "react";

const AboutCard = forwardRef(function AboutCard({ text, tags = [] }, ref) {
  return (
    <div className="about-text flex flex-col gap-4 pb-24">
      <p className="text-1 leading-8 text-dark">{text}</p>
      <div className="flex gap-4 text-2 text-light">
        {tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
});

export default AboutCard;
