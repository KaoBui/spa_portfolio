const ProjectText = ({ textID }) => {
  const texts = textID.texts;
  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-start-1 col-end-7 flex flex-col items-start justify-end gap-2">
        <p className="text-center font-bold text-black text-light uppercase">
          ({textID.tag})
        </p>
        <h2 className="text-3 leading-none"> {textID.title}</h2>
      </div>
      <div className="col-start-7 col-end-13 flex flex-col justify-end gap-4">
        {texts.map((text, index) => (
          <p key={index} className="text-1 text-light">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectText;
