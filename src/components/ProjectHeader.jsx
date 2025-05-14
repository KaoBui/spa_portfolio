import { projects } from "../projectsInfo";

const ProjectHeader = ({ currentProjectId }) => {
  const current = projects.find((p) => p.id === currentProjectId);

  return (
    <div className="grid grid-cols-12 gap-12 pt-24">
      <div className="col-start-1 col-end-9 flex flex-col gap-4">
        <div className="flex gap-2 text-1">
          <p>({current.year})</p>
          <p>({current.name})</p>
        </div>
        <h3 className="split-word text-4 leading-none font-bold tracking-tighter">
          {current.title}
        </h3>
      </div>

      <div className="col-start-10 col-end-13 flex flex-wrap content-end items-end justify-end gap-2">
        {current.tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>

      <div className="z-10 col-start-1 col-end-13 h-[75vh] overflow-hidden rounded-xl bg-gray p-12 px-24">
        <video
          id={`video-${current.id}`}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={current.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ProjectHeader;
