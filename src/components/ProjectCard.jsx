import React, { forwardRef } from "react";
import { Link } from "react-router";
import Button from "../components/Button";

const ProjectCard = forwardRef(function ProjectCard(
  { imageSrc, alt, tags = [], title, url, year },
  ref,
) {
  return (
    <div
      ref={ref}
      className="project flex h-[65vh] w-full flex-col items-start justify-end gap-4 py-6 md:h-screen md:py-8 lg:items-end lg:py-12 2xl:py-12 3xl:py-16"
      data-title={title}
      data-url={url}
    >
      <div className="img-container br-s relative h-full w-full overflow-hidden rounded-2xl">
        <div className="img-overlay hidden md:block absolute top-0 z-2 h-2/5 w-full bg-white/25 backdrop-blur-xl"></div>
        <Link to={url} className="absolute inset-0 h-full w-full">
          <img
            className="project-img h-full w-full object-cover"
            src={imageSrc}
            alt={alt || title}
          />
        </Link>
      </div>

      <div className="flex gap-4 flex-wrap">
        <p className="rounded-full border-1 border-dark bg-dark px-2 py-1 text-white text-0 md:text-1">
          {year}
        </p>
        {tags.map((tag, index) => (
          <p
            key={index}
            className="rounded-full border-1 border-dark px-2 py-1 text-0 md:text-1"
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="flex flex-col lg:hidden">
        <h4 className="text-2 leading-[1.2] 2xl:text-3">{title}</h4>
      </div>
      <div className="flex w-full justify-end">
        <Button className="w-full lg:hidden" href={url}>
          SEE MORE
        </Button>
      </div>
    </div>
  );
});

export default ProjectCard;
