import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutCard from "../components/AboutCard";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const icon1 = (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M120 60.0001V97.5001C120 103.467 122.371 109.19 126.59 113.41C130.81 117.63 136.533 120 142.5 120C148.467 120 154.19 117.63 158.41 113.41C162.63 109.19 165 103.467 165 97.5001V90.0001C165 73.1048 159.296 56.7045 148.811 43.4563C138.326 30.2081 123.675 20.8881 107.232 17.0064C90.7883 13.1247 73.5161 14.9086 58.2133 22.0692C42.9106 29.2298 30.4738 41.3475 22.9181 56.459C15.3623 71.5706 13.1302 88.7906 16.5833 105.329C20.0365 121.868 28.9727 136.756 41.944 147.581C54.9154 158.407 71.1619 164.536 88.0514 164.975C104.941 165.414 121.484 160.137 135 150M120 90C120 106.569 106.569 120 90 120C73.4315 120 60 106.569 60 90C60 73.4315 73.4315 60 90 60C106.569 60 120 73.4315 120 90Z"
      stroke="#828282"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const icon2 = (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M90.0003 16.25V163.75M153.75 53.125L26.2498 126.875M26.2498 53.125L153.75 126.875"
      stroke="#828282"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const icon3 = (
  <svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M138.09 122.015L170.149 89.9996L138.09 57.9847M41.9105 57.9847L9.85083 89.9996L41.9105 122.015M110.037 25.9697L69.9628 154.029"
      stroke="#828282"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const paragraphs = [
  {
    text: "I began my journey in marketing. This foundation shaped the way I approach every project: with a focus on users, performance, and results. It’s what drives my need to create work that not only looks good, but works.",
    tags: ["SEO", "paid advertising"],
    icon: icon1,
  },
  {
    text: "What started as a love for clean, beautiful PowerPoint slides turned into a growing curiosity for how visuals shape understanding. That curiosity led me to web and UX design, where structure meets emotion, and aesthetics serve purpose. I’m drawn to creating designs that not only look good—but make an impact.",
    tags: ["UX Design", "Web Design"],
    icon: icon2,
  },
  {
    text: "Design doesn’t end on the canvas. I’ve always wanted to see ideas through—to bring them to life, exactly as imagined. That’s what drew me to code. It’s a new chapter, but one I’ve fully embraced. Learning to build what I design has opened up a new layer of creativity—one where every interaction, every detail, becomes real.",
    tags: ["Web Development", "WordPress", "React"],
    icon: icon3,
  },
];

export default function AboutNew() {
  const aboutCardRefs = useRef([]);
  const panelRef = useRef();
  const aboutSectionRef = useRef();
  const titleSpanRefs = useRef([]);
  const aboutTitleRef = useRef();
  const titleTextRef = useRef();

  useGSAP(() => {
    const cardHeight = panelRef.current.offsetHeight * 3 * 3;
    ScrollTrigger.create({
      trigger: aboutSectionRef.current,
      start: "top top",
      end: () => "+=" + cardHeight,
      pin: aboutSectionRef.current,
      scrub: true,
      pinSpacing: true,
      id: "about-pin",
      // markers: true,
    });
  }, {});

  useGSAP(
    () => {
      gsap.fromTo(
        titleTextRef.current.querySelectorAll("span"),
        { y: "100%" },
        {
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

  useGSAP(
    () => {
      aboutCardRefs.current.forEach((card) => {
        if (!card) return;
        const textEl = card.querySelector("p");
        if (!textEl) return;

        const words = textEl.textContent.trim().split(/\s+/);
        textEl.innerHTML = words
          .map(
            (word) =>
              `<span class="word inline-flex whitespace-nowrap overflow-hidden">
             <span class="inline-block overflow-hidden leading-[1.2]">${word}&nbsp;</span>
           </span>`,
          )
          .join("");
      });
    },
    { scope: panelRef },
  );

  useGSAP(
    () => {
      const cards = aboutCardRefs.current.filter(Boolean);
      const cardHeight = cards[0].offsetHeight;

      const highlightSpan = (index) => {
        titleSpanRefs.current.forEach((span, i) => {
          gsap.to(span, {
            opacity: i === index ? 1 : 0.2,
            filter: i === index ? "none" : "blur(6px)",
            scale: i === index ? 1.1 : 0.9,
            transformOrigin: "left center",
            duration: 0.5,
            ease: "power2.out",
            overwrite: "true",
          });
          console.log("Highlighting span index:", index);
        });
      };

      const removeHighlight = () => {
        titleSpanRefs.current.forEach((span) => {
          gsap.to(span, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            filter: "none",
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      const enterCard = (card) => {
        const words = card.querySelectorAll(".word > span");
        gsap.to(card, { opacity: 1, duration: 0.2, ease: "power2.out" });

        gsap.fromTo(
          words,
          { opacity: 0, y: "100%" },
          {
            opacity: 1,
            y: 0,
            stagger: 0.025,
            ease: "expoScale(10,2.5,power2.out)",
          },
        );
      };

      const reEnterCard = (card) => {
        gsap.fromTo(
          card,
          { opacity: 0, yPercent: -10 }, // starts from exit position
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.3,
            ease: "power2.out",
          },
        );
      };
      const exitCard = (card) => {
        gsap.to(card, {
          opacity: 0,
          yPercent: -10,
          duration: 0.2,
          ease: "power2.in",
        });
      };

      const reExitCard = (card) => {
        gsap.to(card, {
          opacity: 0,
          yPercent: -10,
          duration: 0.2,
          ease: "power2.in",
        });
      };

      aboutCardRefs.current.forEach((card, i) => {
        const words = card.querySelectorAll(".word > span");
        const tags = card.querySelectorAll("div > p");

        const extraSpace = cardHeight * 2; // add 50% more scroll per card

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutTitleRef.current,
            // markers: true,
            id: `about-card-${i}`,
            start: () =>
              `top+=${i * (cardHeight + extraSpace) + cardHeight / 2} top`,
            end: () =>
              `top+=${(i + 1) * (cardHeight + extraSpace) + cardHeight / 2} top`,
            scrub: true,
            onEnter: () => {
              highlightSpan(i);
            },
            onEnterBack: () => {
              gsap.set(cards, { opacity: 0 });
              reEnterCard(card);
              highlightSpan(i);
            },
            onLeave: () => {
              exitCard(card);
            },
            onLeaveBack: () => {
              // exitCard(card);
              if (i === 0) removeHighlight();
            },
          },
        });

        tl.fromTo(
          card,
          { opacity: 0 },
          { opacity: 1, ease: "none", duration: 0.1 },
        )
          .fromTo(
            words,
            { opacity: 0, y: "100%" },
            {
              opacity: 1,
              y: 0,
              stagger: 0.025,
              ease: "expoScale(10,2.5,power2.out)",
              duration: 0.4,
            },
          )
          .fromTo(
            tags,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 0.6,
              ease: "expoScale(10,2.5,power2.out)",
            },
            "<+0.2",
          );
        tl.to({}, { duration: 0.5 });
      });
    },
    { scope: panelRef },
  );
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

      <div className="grid-cols-12 gap-16 md:grid">
        <div
          ref={panelRef}
          className="relative col-start-8 col-end-13 grid 2xl:col-start-7"
        >
          {paragraphs.map((paragraph, i) => (
            <AboutCard
              key={i}
              ref={(el) => (aboutCardRefs.current[i] = el)}
              text={paragraph.text}
              tags={paragraph.tags}
              icon={paragraph.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
