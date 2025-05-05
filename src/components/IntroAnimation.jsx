import { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroAnimation = () => {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const counter = counterRef.current;

    const intro = gsap.timeline();

    intro
      .to(counter, {
        innerText: 100,
        duration: 3,
        snap: { innerText: 2 },
        ease: "power3.inOut",
        onUpdate: () => {
          counter.textContent = `${Math.round(Number(counter.innerText))}`;
        },
        onComplete: startMaskAnimation,
      })
      .to(loader, {
        y: "100vh",
        duration: 1.5,
        ease: "power4.in",
        delay: -0.5,
      });

    function startMaskAnimation() {
      let start = 0;
      let end = 90;
      let duration = 1500;
      let startTime = performance.now();

      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      }

      function animateMask(time) {
        let elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let easedProgress = easeInOutQuad(progress);
        let currentC = start + (end - start) * easedProgress;
        loader.style.setProperty("--c", `${currentC}%`);

        if (progress < 1) {
          requestAnimationFrame(animateMask);
        }
      }

      requestAnimationFrame(animateMask);
    }
  }, []);

  return (
    <div
      ref={loaderRef}
      className="loader fixed top-0 left-0 z-[1000] flex h-screen w-full items-center justify-center bg-black text-white"
      style={{
        "--c": "0%",
        maskImage:
          "radial-gradient(60% var(--c) at top, #0000 calc(100% - 1px), #000)",
        WebkitMaskImage:
          "radial-gradient(60% var(--c) at top, #0000 calc(100% - 1px), #000)",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
      }}
    >
      <div
        ref={counterRef}
        className="counter z-[2] text-[5vw] font-bold text-white"
      >
        0
      </div>
    </div>
  );
};

export default IntroAnimation;
