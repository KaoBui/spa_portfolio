import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AdeccoB1 from "../assets/img/adecco-b1.jpg";
import AdeccoA1 from "../assets/img/adecco-a1.jpg";
import AdeccoB2 from "../assets/img/adecco-b2.jpg";
import AdeccoA2 from "../assets/img/adecco-a2.jpg";
import AdeccoB3 from "../assets/img/adecco-b3.jpg";
import AdeccoA3 from "../assets/img/adecco-a3.jpg";
import AdeccoB4 from "../assets/img/adecco-b4.jpg";
import AdeccoA4 from "../assets/img/adecco-a4.jpg";
import AdeccoB5 from "../assets/img/adecco-b5.jpg";
import AdeccoA5 from "../assets/img/adecco-a6.jpg";

const tabs = [
  "Search bar",
  "Highlights",
  "Featured tools",
  "Job categories",
  "Blogs",
];

const content = {
  "Search bar": [
    {
      img: AdeccoB1,
      title: "Problem :",
      text: "The search bar lacked visibility and prominence, making it harder for users to start their job search. Compared to similar platforms, the section felt understated and cluttered with secondary information.",
    },
    {
      img: AdeccoA1,
      title: "Solution :",
      text: "I expanded the hero section to give the search bar a central focus, reorganized surrounding content, and simplified the layout. ",
    },
  ],
  Highlights: [
    {
      img: AdeccoB2,
      title: "Problem :",
      text: "The highlight cards were overloaded with information. Labels added little value and made the content harder to scan quickly.",
    },
    {
      img: AdeccoA2,
      title: "Solution :",
      text: "Removed unnecessary labels and simplified the cards to display only titles by default. Descriptions now appear on hover, creating a cleaner layout and easier content discovery.",
    },
  ],
  "Featured tools": [
    {
      img: AdeccoB3,
      title: "Problem :",
      text: "The original layout lacked visual appeal and made it difficult to highlight key tools. Too much text and minimal visuals made scanning and understanding slow for users.",
    },
    {
      img: AdeccoA3,
      title: "Solution :",
      text: "Redesigned the section with a more interactive and visual layout. Each tool is now highlighted with supporting visuals and reduced text, helping users scan and understand options more quickly.",
    },
  ],
  "Job categories": [
    {
      img: AdeccoB4,
      title: "Problem :",
      text: 'Excessive use of red links made the section visually overwhelming. Data also showed users clicked more on the "Cities" tab than the "Categories" tab, but it was not prioritized.',
    },
    {
      img: AdeccoA4,
      title: "Solution :",
      text: 'Reorganized the section by making the "Cities" tab the default, reducing the number of options, and removing the red styling on links. This simplified the layout and improved scannability for users.',
    },
  ],
  Blogs: [
    {
      img: AdeccoB5,
      title: "Problem :",
      text: "The section’s title and subtitle were too long and overused red, creating visual noise. The newsletter subscription CTA was buried within the subtitle, making it unclear and easy to miss.",
    },
    {
      img: AdeccoA5,
      title: "Solution :",
      text: "Simplified the title and separated the newsletter into its own distinct block, making it more visible and easier for users to subscribe.",
    },
  ],
};

export default function ProjectTabs() {
  const tabRefs = useRef([]);
  const indicatorRef = useRef(null);
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Search bar");

  useGSAP(
    () => {
      gsap.fromTo(
        tabRefs.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
      );
    },
    { scope: tabRefs },
  );

  useGSAP(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeEl = tabRefs.current[activeIndex];
    if (activeEl && indicatorRef.current) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeEl;

      // detect layout direction (row on lg+, column otherwise)
      const isRowLayout = window.innerWidth >= 1024; // lg breakpoint in Tailwind

      gsap.to(indicatorRef.current, {
        x: isRowLayout ? offsetLeft : 0,
        y: isRowLayout ? 0 : offsetTop,
        width: isRowLayout ? offsetWidth : "calc(100% - 1rem)", // full width minus padding
        height: isRowLayout ? "auto" : offsetHeight,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [activeTab]);

  useGSAP(
    () => {
      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll(".tab-item");

        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
        );
      }
    },
    { dependencies: [activeTab], scope: contentRef },
  );

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gray p-4 lg:p-12 lg:px-24">
      <div className="relative mb-6 flex flex-col flex-wrap justify-center gap-2 overflow-hidden rounded-3xl bg-gray-1 p-2 lg:mb-10 lg:flex-row lg:rounded-full">
        <div
          ref={indicatorRef}
          className="absolute top-0 bottom-2 left-2 z-0 rounded-full bg-gray-5 lg:top-2 lg:left-0"
          style={{ width: 0 }}
        ></div>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[i] = el)}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 rounded-full px-4 py-1 transition-colors ${
              tab === activeTab ? "text-black" : "text-gray-5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        ref={contentRef}
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-10"
      >
        {content[activeTab].map((item, index) => (
          <div key={index} className="tab-item rounded-xl p-4 text-center">
            <img
              src={item.img}
              alt={item.title}
              className="mb-4 w-full rounded-xl object-cover"
            />
            <p className="text-1 font-semibold">{item.title}</p>
            <p className="text-1 text-light">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
