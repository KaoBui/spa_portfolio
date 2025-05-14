import OrangeMockup from "./assets/img/orange-mockup.jpg";
import OrangeVideo from "./assets/vid/Orange-header.mp4";

import AdeccoMockup from "./assets/img/adecco-mockup.jpg";
import ArtOfficeMockup from "./assets/img/artoffice-mockup.jpg";

export const projects = [
  {
    id: 1,
    name: "Orange Space",
    title: "Help a coworking space reinforce their presence online",
    url: "/projects/orange-space",
    imageSrc: OrangeMockup,
    tags: ["Web Design", "Web Development", "SEO"],
    video: OrangeVideo,
    year: 2022,
  },
  {
    id: 2,
    name: "Adecco France",
    title: "Optimize homepage for the market leader platform",
    url: "/projects/adecco",
    imageSrc: AdeccoMockup,
    tags: ["UX Research", "Web Development", "Accessibility"],
    year: 2024,
  },
  {
    id: 3,
    name: "The Art Office",
    title: "Build a brand identity for an art startup",
    url: "/projects/the-art-office",
    imageSrc: ArtOfficeMockup,
    tags: ["Web Design", "Web Development", "Branding"],
    year: 2024,
  },
];