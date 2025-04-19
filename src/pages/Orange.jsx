import Hero from "../sections/Hero";
import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import OrangeVideo from "../assets/vid/Orange Header.mp4";
export default function Orange() {
  return (
    <>
      <Layout>
        <section className="py-8 grid grid-cols-12 gap-8">
          <div className="flex gap-2 flex-col col-start-1 col-end-9 pt-8">
            <div className="flex gap-2 text-1">
              <p>(2022)</p>
              <p>(Orange Space)</p>
            </div>
            <h3 className="split-word text-4 leading-none font-bold tracking-tighter">Building an online presence for a coworking space</h3>
          </div>
          <div className="flex gap-2 col-start-10 col-end-13 flex-wrap items-end justify-end content-end">
            <p className="tag">Design</p>
            <p className="tag">SEO</p>
            <p className="tag">Development</p>
          </div>
          <div className="col-start-1 col-end-13 video-container background-gray overflow-hidden rounded-xl z-10">
            <video
              id="myVideo"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={OrangeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

      </Layout>
    </>
  );
}
