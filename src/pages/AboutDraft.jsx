import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutCard from "../components/AboutCard";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  {
    text: "I began my journey in marketing. This foundation shaped the way I approach every project: with a focus on users, performance, and results. It’s what drives my need to create work that not only looks good, but works.",
    tags: ["SEO", "paid advertising"],
  },
  {
    text: "What started as a love for clean, beautiful PowerPoint slides turned into a growing curiosity for how visuals shape understanding. That curiosity led me to web and UX design, where structure meets emotion, and aesthetics serve purpose. I’m drawn to creating designs that not only look good—but make an impact.",
    tags: ["UX Design", "Web Design"],
  },
  {
    text: "Design doesn’t end on the canvas. I’ve always wanted to see ideas through—to bring them to life, exactly as imagined. That’s what drew me to code. It’s a new chapter, but one I’ve fully embraced. Learning to build what I design has opened up a new layer of creativity—one where every interaction, every detail, becomes real.",
    tags: ["Web Development", "WordPress", "React"],
  },
];

export default function AboutDraft() {
  const panelRef = useRef();
  const aboutSectionRef = useRef();
  const titleSpanRefs = useRef([]);
  const aboutTitleRef = useRef();
  const titleTextRef = useRef();

  useGSAP(() => {
    const panelWidth = panelRef.current.offsetWidth;

    ScrollTrigger.create({
      trigger: aboutSectionRef.current,
      start: "top top",
      end: () => "+=" + panelWidth,
      pin: aboutSectionRef.current,
      scrub: true,
      pinSpacing: true,
      id: "about-pin",
      markers: true,
    });

    gsap.from(panelRef.current, {
      xPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top top",
        scrub: 1,
        end: () => "+=" + (panelWidth - 500),
      },
    });
  }, {});

  useGSAP(
    () => {
      gsap.fromTo(
        titleTextRef.current.querySelectorAll("span"),
        { opacity: 0.15, y: "100%" },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleTextRef.current,
            start: "top 90%",
            endTrigger: aboutSectionRef.current,
            end: "top top",
            scrub: 1,
          },
        },
      );
    },
    { scope: titleTextRef },
  );

  // useGSAP(() => {
  //   const panelWidth = panelRef.current.offsetWidth;
  //   const cards = panelRef.current.querySelectorAll(":scope > div");
  //   const total = cards.length;

  //   const highlightSpan = (index) => {
  //     titleSpanRefs.current.forEach((span, i) => {
  //       gsap.to(span, {
  //         opacity: i === index ? 1 : 0.2,
  //         filter: i === index ? "none" : "blur(6px)",
  //         scale: i === index ? 1.1 : 0.9,
  //         transformOrigin: "left center",
  //         duration: 0.5,
  //         ease: "power2.out",
  //       });
  //     });
  //   };

  //   const removeHighlight = () => {
  //     titleSpanRefs.current.forEach((span) => {
  //       gsap.to(span, {
  //         opacity: 1,
  //         scale: 1,
  //         duration: 0.3,
  //         filter: "none",
  //         ease: "power2.out",
  //       });
  //     });
  //   };

  //   cards.forEach((el, i) => {
  //     const scrollId = `about-card-${i}`;
  //     el.dataset.scrollId = scrollId;

  //     ScrollTrigger.create({
  //       trigger: aboutSectionRef.current,
  //       start: "top top",
  //       end: () => "+=" + (panelWidth - 500),
  //       scrub: true,
  //       snap: 1 / total,
  //       onUpdate: (self) => {
          
  //         const progress = self.progress;
  //         const index = Math.floor(progress * total - 1); // Which card is active
  //         highlightSpan(index);

  //         if (index === 0 && progress <= 0.01) {
  //           removeHighlight();
  //         }
  //       },
  //     });
  //   });
  // }, { revertOnUpdate: true, scope: panelRef });
  return (
    <section
      ref={aboutSectionRef}
      className="relative h-screen grid-rows-[1fr_auto] md:grid"
    >
      <div ref={aboutTitleRef} className="col-span-full flex gap-1 lg:py-12">
        <p className="text-2 font-bold">2</p>
        <h2
          ref={titleTextRef}
          className="flex flex-col gap-0 text-3 leading-none font-bold tracking-tighter md:text-5"
        >
          {["Marketing,", "Design,", "Development."].map((line, i) => (
            <span key={i} ref={(el) => (titleSpanRefs.current[i] = el)}>
              {line}
            </span>
          ))}
        </h2>
      </div>
      <div className="overflow-hidden pb-6 md:pb-8 lg:pb-12">
        <div ref={panelRef} className="grid-cols-12 gap-12 pl-4 md:grid">
          <div className="col-start-1 col-end-5">
            <div className="about-text flex flex-col items-end gap-4">
              <p className="text-5 leading-none">#</p>
              <p className="text-justify indent-8 text-1 leading-[1.4] text-light">
                I began my journey in marketing. This foundation shaped the way
                I approach every project: with a focus on users, performance,
                and results. It’s what drives my need to create work that not
                only looks good, but works.
              </p>
              <div className="flex gap-4">
                <p>(seo)</p>
                <p>(paid advertising)</p>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-end-9">
            <div className="about-text flex flex-col items-end gap-4">
              <p className="text-5 leading-none">*</p>
              <p className="text-justify indent-8 text-1 leading-[1.4] text-light">
                For long I have a growing curiosity for how visuals shape
                understanding. That curiosity led me to web and UX design, where
                structure meets emotion, and aesthetics serve purpose. I’m drawn
                to creating designs that not only look good—but make an impact.
              </p>
              <div className="flex gap-4">
                <p>(seo)</p>
                <p>(paid advertising)</p>
              </div>
            </div>
          </div>
          <div className="col-start-9 col-end-13">
            <div className="about-text flex flex-col items-end gap-4">
              <p className="text-5 leading-none">/</p>
              <p className="text-justify indent-8 text-1 leading-[1.4] text-light">
                I’ve always wanted to see ideas through—to bring them to life,
                exactly as imagined. That’s what drew me to code. It’s a new
                chapter, but one I’ve fully embraced. Learning to build what I
                design has opened up a new layer of creativity—one where every
                interaction, every detail, becomes real.
              </p>
              <div className="flex gap-4">
                <p>(seo)</p>
                <p>(paid advertising)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
