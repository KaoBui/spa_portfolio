import { projects } from "../projectsInfo";

const RelatedProjects = ({ currentProjectId }) => {
  const related = projects.filter(project => project.id !== currentProjectId);

  return (
    <section className="related-projects">
      <h2 className="text-4 leading-none font-bold tracking-tighter">You seems interested! Check out my other projects then!</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {related.map(project => (
          <a href={project.url} key={project.id} className="block">
            <img src={project.imageSrc} alt={`${project.name} mockup`} />
            <h3 className="text-1">{project.name}</h3>
            <p className="text-3 leading-none">{project.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
