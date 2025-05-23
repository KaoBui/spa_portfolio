import React, { forwardRef } from 'react'

const ProjectCard = forwardRef(function ProjectCard(
  { imageSrc, alt, tags = [], title, url },
  ref
) {
  return (
    <div
      ref={ref} 
      className="project flex h-screen flex-col items-end justify-end gap-4 py-16"
      data-title={title}
      data-url={url}
    >
      <div className="img-container br-s h-full overflow-hidden">
        <img
          className="h-full rounded-2xl object-cover"
          src={imageSrc}
          alt={alt || title}
        />
      </div>

      <div className="flex gap-4">
        {tags.map((tag, index) => (
          <p key={index} className="px-2 py-1 rounded-full border-1 border-dark">
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
})

export default ProjectCard
