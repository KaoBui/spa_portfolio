const ProjectText = ({ textID }) => {
  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-start-1 col-end-7 flex flex-col items-start justify-end gap-4">
        <p className="rounded-full border-1 border-light px-4 py-1 text-center text-light">
          {textID.tag}
        </p>
        <h2 className="text-3 leading-none"> {textID.title}</h2>
      </div>

      <div className="col-start-7 col-end-13 flex flex-col justify-end gap-8">
        <p className="text-1 text-light">{textID.text}</p>
      </div>
    </div>
  );
};

export default ProjectText;
