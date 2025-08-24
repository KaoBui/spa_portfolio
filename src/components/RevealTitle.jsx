import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function RevealTitle({ children, className = "" }) {
  const titleRef = useRef(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    document.fonts.ready.then(() => {
      // Split the text into words
      let split = SplitText.create(titleRef.current, {
        type: "words",
        mask: "words",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(split.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.025,
        duration: 0.5,
        ease: "expoScale(10,2.5,power2.out)",
      });

      // cleanup
      return () => {
        split.revert();
        tl.kill();
      };
    }, []);
  });

  return (
    <h2 ref={titleRef} className={className}>
      {children}
    </h2>
  );
}
