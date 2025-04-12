export default function Projects() {
  return (
    <section id="projects" class="relative grid grid-cols-12 px-8 py-16">
      {/* <div className="absolute top-0 left-0 mx-8 my-16 h-[70vh] w-full bg-gray"></div> */}
      <div class="col-start-1 col-end-6 flex flex-col justify-between">
        <div class="flex flex-col gap-6">
          <h2 className="text-5 font-bold tracking-tighter leading-none">Selected works</h2>
          <div class="flex flex-col gap-2">
            <p class="project-index">
              <span>#1</span>Orange Space
            </p>
            <p class="project-index">
              <span>#2</span>Adecco France
            </p>
            <p class="project-index">
              <span>#3</span>Az Invest
            </p>
            <p class="project-index">
              <span>#4</span>The Art Office
            </p>
          </div>
        </div>
        <div id="project-title" class="flex flex-col gap-4">
          <h4 id="project-title-content"></h4>
          <a id="project-link" href="/projects/orangespace.html">
            See more
          </a>
        </div>
      </div>
    </section>
  );
}
