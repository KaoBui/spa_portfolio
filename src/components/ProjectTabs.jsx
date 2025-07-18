import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AdeccoB1 from "../assets/img/adecco-b1.jpg";
import AdeccoA1 from "../assets/img/adecco-a1.jpg";
import AdeccoB2 from "../assets/img/adecco-b2.jpg";
import AdeccoA2 from "../assets/img/adecco-a2.jpg";

const tabs = ["Search bar", "Highlights", "Features", "Categories", "Blogs"];

const content = {
  "Search bar": [
    {
      img: AdeccoB1,
      title: "Before:",
      text: "The search area in general isn’t highlighted enough, especially compared to other websites of similar nature.",
    },
    {
      img: AdeccoA1,
      title: "After:",
      text: "The search area in general isn’t highlighted enough, especially compared to other websites of similar nature.",
    },
  ],
  "Highlights": [
    {
      img: AdeccoB2,
      title: "Before:",
      text: "The search area in general isn’t highlighted enough, especially compared to other websites of similar nature.",
    },
    {
      img: AdeccoA2,
      title: "After:",
      text: "The search area in general isn’t highlighted enough, especially compared to other websites of similar nature.",
    },
  ],
};

export default function ProjectTabs() {
  const tabRefs = useRef([]);
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

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gray p-12 px-24">
      <div className="mb-10 flex flex-wrap justify-center gap-2 overflow-hidden rounded-full bg-gray-1 p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-1 transition-all ${
              tab === activeTab ? "bg-gray-5 text-black" : "text-gray-5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div ref={tabRefs} className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {content[activeTab].map((item, index) => (
          <div key={index} className="rounded-xl p-4 text-center">
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
