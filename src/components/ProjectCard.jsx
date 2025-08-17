import React, { forwardRef } from "react";
import { Link } from "react-router";
import Button from "../components/Button";

const ProjectCard = forwardRef(function ProjectCard(
  { imageSrc, alt, tags = [], title, url },
  ref,
) {
  return (
    <div
      ref={ref}
      className="project min-w flex h-[65vh] min-w-full flex-col items-start justify-end gap-4 py-6 md:h-screen md:py-8 lg:items-end lg:py-12 2xl:py-12 3xl:py-16"
      data-title={title}
      data-url={url}
    >
      <div className="img-container br-s relative h-full w-full overflow-hidden">
        <Link to={url} className="absolute inset-0 h-full w-full">
          <img
            className="h-full w-full rounded-2xl object-cover"
            src={imageSrc}
            alt={alt || title}
          />
        </Link>
      </div>

      <div className="flex gap-4">
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
