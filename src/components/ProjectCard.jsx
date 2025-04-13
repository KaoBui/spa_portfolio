export default function ProjectCard({ imageSrc, alt, tags = [], title, url }) {
    return (
      <div
        className="project gap-4 flex flex-col items-end justify-end h-screen py-16"
        data-title={title}
        data-url={url}
      >
        <div className="img-container br-s overflow-hidden h-full">
          <img className="rounded-2xl object-cover h-full" src={imageSrc} alt={alt || title} />
        </div>
  
        <div className="flex gap-8">
          {tags.map((tag, index) => (
            <p key={index} className="tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
    );
  }
  