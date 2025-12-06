import OrangeMockup from "./assets/img/orange-mockup.jpg";
import AdeccoMockup from "./assets/img/adecco-mockup.jpg";
import ArtOfficeMockup from "./assets/img/tao-mockup.jpg";
import FakeOfficeMockup from "./assets/img/fakeoff-mockup.jpg";
import L2RMockup from "./assets/img/l2r-mockup.jpg";

export const projects = [
  {
    id: 1,  
    name: "Les 2 Rives",
    title: "Modernizing an established institution's website",
    url: "/projects/les-2-rives",
    imageSrc: L2RMockup,
    tags: ["Web Design", "Web Development", "WordPress"],
    video: "https://kaobui.s3.eu-west-3.amazonaws.com/Les2Rives+Video.mp4",
    year: 2025,
  }
  ,{
    id: 2,
    name: "Fake Off",
    title: "Improving the web experience for media education",
    url: "/projects/fake-off",
    imageSrc: FakeOfficeMockup,
    tags: ["Web Design", "User Experience", "Accessibility"],
    video: "https://kaobui.s3.eu-west-3.amazonaws.com/fakeoff-video.mp4",
    year: 2025,
  },
  {
    id: 3,
    name: "Adecco France",
    title: "Redesigning homepage for the leading recruitment agency",
    url: "/projects/adecco",
    imageSrc: AdeccoMockup,
    tags: ["UX Research", "Web Design", "Web Development", "Analytics"],
    video: "https://kaobui.s3.eu-west-3.amazonaws.com/adecco-video.mp4",
    year: 2024,
  },

  {
    id: 4,
    name: "The Art Office",
    title: "Shaping the visual identity of an art-driven business",
    url: "/projects/the-art-office",
    imageSrc: ArtOfficeMockup,
    tags: ["Web Design", "Branding", "Design System"],
    video: "https://kaobui.s3.eu-west-3.amazonaws.com/tao-video.mp4",
    year: 2024,
  },
  {
    id: 5,
    name: "Orange Space",
    title: "Help a coworking space reinforce their presence online",
    url: "/projects/orange-space",
    imageSrc: OrangeMockup,
    tags: ["Web Design", "Web Development", "SEO"],
    video: "https://kaobui.s3.eu-west-3.amazonaws.com/orange-video.mp4",
    year: 2022,
  },
];
