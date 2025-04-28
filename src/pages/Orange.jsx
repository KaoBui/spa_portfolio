import Layout from "../sections/Layout";
import ProjectHeader from "../components/ProjectHeader";
import OrangeVideo from "../assets/vid/Orange Header.mp4";
import OrangeMobile from "../assets/img/orange-mobile-mockup.png";
import OrangeMockup from "../assets/img/orange-mockup.jpg";
import OrangeBefore from "../assets/img/orange-before.jpg";
import OrangeAfter from "../assets/img/orange-after.jpg";
import Orange1 from "../assets/img/orange-service-page.jpg";
import Orange2 from "../assets/img/orange-blog-post.jpg";
import Orange3 from "../assets/img/orange-feature-section.jpg";
import Orange4 from "../assets/img/orange-services.jpg";
import Orange5 from "../assets/img/orange-benefits.jpg";

import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProjectCarousel from "../components/ProjectCarousel";

const projectImages = [Orange1, Orange2, Orange3, Orange4, Orange5];

export default function Orange() {
  return (
    <>
      <Layout>
        <section className="space-y-16">
          <div className="grid grid-cols-12 gap-12 pt-24">
            <div className="col-start-1 col-end-9 flex flex-col gap-4">
              <div className="flex gap-2 text-1">
                <p>(2022)</p>
                <p>(Orange Space)</p>
              </div>
              <h3 className="split-word text-4 leading-none font-bold tracking-tighter">
                Building an online presence for a coworking space
              </h3>
            </div>
            <div className="col-start-10 col-end-13 flex flex-wrap content-end items-end justify-end gap-2">
              <p className="tag">Design</p>
              <p className="tag">SEO</p>
              <p className="tag">Development</p>
            </div>
            <div className="z-10 col-start-1 col-end-13 h-[75vh] overflow-hidden rounded-xl bg-gray p-12 px-24">
              <video
                id="myVideo"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={OrangeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-start-1 col-end-4 flex items-start justify-start gap-4">
              <p className="rounded-full border-1 border-dark px-4 py-1 text-center">
                brief
              </p>
            </div>
            <div className="col-start-4 col-end-13 flex flex-col gap-8">
              <h2 className="text-3 leading-none">
                Help a coworking space reinforce their presence online
              </h2>
              <p className="text-1 text-light">
                Orange Space is a premium coworking space in Hanoi, Vietnam.
                Their mission is to offer an all-in-one office space service
                with clean aesthetics and efficiency. They needed a website that
                reflected their identity as a modern, productive workspace
              </p>
            </div>
            <div className="col-start-1 col-end-7 rounded-xl bg-gray">
              <img src={OrangeMobile} alt="" />
            </div>
            <div className="col-start-7 col-end-13 overflow-hidden rounded-xl bg-gray">
              <img className="h-full object-cover" src={OrangeMockup} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-start-1 col-end-4 flex items-start justify-start">
              <p className="rounded-full border-1 border-dark px-2 py-1 text-center text-1">
                solution
              </p>
            </div>
            <div className="col-start-4 col-end-13 flex flex-col gap-8">
              <h2 className="text-3 leading-none">
                More than a modern website
              </h2>
              <p className="text-1 text-light">
                Their request was straightforward: a beautiful website. However,
                as I explored their needs, I realized there was an opportunity
                to create something far more impactful. The project was then
                about helping Orange Space build a digital identity that aligned
                with their core values and business goals. I then crafted a
                website that captured their identity at the same time
                seo-optimized, couppled with a SEO strategy.
              </p>
            </div>
            <BeforeAfterSlider
              beforeImg={OrangeBefore}
              afterImg={OrangeAfter}
            />
          </div>
          <div className="gap-12">
            <ProjectCarousel images={projectImages} />
          </div>
        </section>
      </Layout>
    </>
  );
}
