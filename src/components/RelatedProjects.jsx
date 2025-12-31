import { projects } from "../projectsInfo";
import Button from "../components/Button";

const RelatedProjects = ({ currentProjectId }) => {
  const related = projects.filter((project) => project.id !== currentProjectId);

  return (
    <section id="projects" className="related-projects">
      <div className="mb-10 flex flex-col gap-2">
        <h2 className="text-4 leading-none font-bold tracking-tighter">
          Other projects
        </h2>
      </div>
      <div className="grid gap-12 md:grid-cols-2">
        {related.map((project) => (
          <div key={project.id} className="block">
            <img
              className="rounded-2xl"
              src={project.imageSrc}
              alt={`${project.name} mockup`}
            />
            <h3 className="text-1 pt-6 text-light">{project.name}</h3>
            <p className="text-2 leading-none">{project.title}</p>
            <Button className="mt-4" href={project.url}>SEE MORE</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
