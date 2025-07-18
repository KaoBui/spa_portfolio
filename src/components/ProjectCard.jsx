import React, { forwardRef } from "react";
import { Link } from "react-router";

const ProjectCard = forwardRef(function ProjectCard(
  { imageSrc, alt, tags = [], title, url },
  ref,
) {
  return (
    <div
      ref={ref}
      className="project flex h-screen flex-col items-end justify-end gap-4 py-16"
      data-title={title}
      data-url={url}
    >
      <div className="img-container br-s relative h-full w-full overflow-hidden">
        <Link to={url} className="absolute inset-0 h-full w-full">
          <img
            className="h-full rounded-2xl object-cover"
            src={imageSrc}
            alt={alt || title}
          />
        </Link>
      </div>

      <div className="flex gap-4">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="rounded-full border-1 border-dark px-2 py-1"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
});

export default ProjectCard;
