import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutCard from "../components/AboutCard";
gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  {
    text: "I began my journey in marketing. This foundation shaped the way I approach every project: with a focus on users, performance, and results. It’s what drives my need to create work that not only looks good, but works. My marketing background anchors my design thinking in real needs and measurable impact.",
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

export default function About() {
  const aboutCardRefs = useRef([]);
  const titleSpanRefs = useRef([]);
  const endSpacerRef = useRef(null);


  useEffect(() => {
    const paragraphs = gsap.utils.toArray(".about-text");
    const aboutTitle = document.getElementById("about-title");
    const aboutTitlleWrapper = document.getElementById("about-title-wrapper");
    const lastAboutTitle = paragraphs[paragraphs.length - 1];


    const pinAbout = ScrollTrigger.create({
      trigger: "#about",
      start: "top top",
      endTrigger: "#about-end",
      end: "bottom bottom",
      pin: aboutTitlleWrapper,
      scrub: true,
      pinSpacing: false,
      id: "about-pin",
    });

    const aboutTitleAnimation = gsap.fromTo(
      aboutTitle,
      { gap: "8rem", yPercent: 10, opacity: 0.15 },
      {
        gap: "0rem",
        yPercent: 0,
        duration: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutTitle,
          start: "top 90%",
          endTrigger: "#about",
          end: "top top",
          scrub: 1,
        },
      },
    );

    const highlightSpan = (index) => {
      titleSpanRefs.current.forEach((span, i) => {
        gsap.to(span, {
          opacity: i === index ? 1 : 0.12,
          scale: i === index ? 1.1 : 0.9,
          transformOrigin: "left center",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    const removeHighlight = () => {
      titleSpanRefs.current.forEach((span) => {
        gsap.to(span, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    aboutCardRefs.current.forEach((el, i) => {
      const scrollId = `about-card-${i}`;
      el.dataset.scrollId = scrollId;

      const tl = gsap.timeline({
        scrollTrigger: {
          id: scrollId,
          trigger: el,
          start: "bottom bottom",
          end: "top 10%",
          pin: true,
          pinSpacing: true,
          scrub: true,
          onEnter: () => highlightSpan(i),
          onEnterBack: () => highlightSpan(i),
          onLeaveBack: () => {
            if (i === 0) removeHighlight(); // 👈 reset if first
          },
        },
      });

      tl.fromTo(
        el,
        { opacity: 0.5, yPercent: 10 },
        { opacity: 1, yPercent: 0, ease: "power2.out" },
      );

      tl.to(el, {
        opacity: 0,
        yPercent: -10,
        ease: "power2.in",
      });
    });

    requestAnimationFrame(() => {
      let totalPinHeight = 0;
    
      aboutCardRefs.current.forEach((el) => {
        const scrollId = el.dataset.scrollId;
        const trigger = ScrollTrigger.getById(scrollId);
    
        if (trigger) {
          const height = trigger.end - trigger.start;
          totalPinHeight += height;
        }
      });
    
      if (endSpacerRef.current) {
        endSpacerRef.current.style.height = `${totalPinHeight}px`;
      }
    });

    return () => {
      pinAbout.kill();
      aboutTitleAnimation.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section id="about" className="relative grid grid-rows-[1fr_auto]">
      <div
        id="about-title-wrapper"
        className="col-span-full flex gap-1 lg:py-12"
      >
        <p className="text-2 font-bold">2</p>
        <h2
          id="about-title"
          className="flex flex-col gap-8 text-5 leading-none font-bold tracking-tighter"
        >
          {["Rooted in marketing,", "shaped by design,", "driven by code."].map(
            (line, i) => (
              <span key={i} ref={(el) => (titleSpanRefs.current[i] = el)}>
                {line}
              </span>
            ),
          )}
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-16">
        <div className="col-start-1 col-end-4"></div>
        <div className="relative col-start-6 col-end-13 pt-8 lg:pt-16 xl:pt-24">
          <div id="about-description" className="relative">
            {paragraphs.map((paragraph, i) => (
              <div key={i} ref={(el) => (aboutCardRefs.current[i] = el)}>
                <AboutCard text={paragraph.text} tags={paragraph.tags} />
              </div>
            ))}
          </div>
          <div ref={endSpacerRef} id="about-end" className="h-[250vh] absolute"></div>
        </div>
      </div>
    </section>
  );
}
