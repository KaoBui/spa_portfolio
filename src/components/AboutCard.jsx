import { forwardRef } from "react";

const AboutCard = forwardRef(function AboutCard(
  { text, tags = [], icon },
  ref,
) {
  return (
    <div
      className="col-start-1 row-start-1 flex flex-col justify-end gap-4"
      ref={ref}
    >
      <div className="col-start-1 col-end-4 flex flex-col items-start justify-center">
        {icon}
      </div>
      <p className="text-justify text-1 leading-[1.4] text-light 3xl:text-2">
        {text}
      </p>
      <div className="flex flex-wrap gap-4 lg:gap-8 text-right">
        {tags.map((tag, index) => (
          <p key={index} className="text-1 text-dark md:text-2 3xl:text-3">
            ({tag})
          </p>
        ))}
      </div>
    </div>
  );
});

export default AboutCard;
