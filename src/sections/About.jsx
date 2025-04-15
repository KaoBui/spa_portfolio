export default function About() {
  return (
    <section
      id="about"
      className="flex h-screen flex-col items-start justify-between px-8 py-16"
    >
      <div className="flex gap-1 lg:py-8">
        <p className="text-2 font-bold">2</p>
        <h2 className="text-5 leading-none font-bold tracking-tighter">
          Rooted in marketing,<br></br> shaped by design,<br></br> driven by
          code.
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-16">
        <div className="col-start-1 col-end-4">
        </div>
        <div className="col-start-7 col-end-13 flex flex-col gap-4 lg:py-8 xl:py-10">
          <p className="text-1 leading-8 text-dark">
            I began my journey in marketing. This foundation shaped the way I
            approach every project: with a focus on users, performance, and
            results. It’s what drives my need to create work that not only looks
            good, but works. My marketing background anchors my design thinking
            in real needs and measurable impact.
          </p>
          <div className="flex gap-4 text-2 text-light">
            <p>#SEO</p>
            <p>#paid advertising</p>
          </div>
        </div>
      </div>
    </section>
  );
}
