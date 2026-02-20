import { useEffect, useRef, useState } from "react";
import NumberFlow, { continuous } from "@number-flow/react";
import gsap from "gsap";

const IntroAnimation = () => {
  const loaderRef = useRef(null);
  const [countValue, setCountValue] = useState(0);

  const numberFlowEase = `cubic-bezier(0.785, 0.135, 0.15, 0.86)`;
  const numberFlowDuration = 3000;

  useEffect(() => {
    const loader = loaderRef.current;

    const intro = gsap.timeline();
    const countTween = { value: 0 };
    const numberFlowDelaySeconds = numberFlowDuration / 1000;

    intro
      .to(countTween, {
        value: 100,
        onUpdate: () => {
          setCountValue(Math.round(countTween.value));
        },
        onComplete: () => {
          gsap.delayedCall(numberFlowDelaySeconds, startMaskAnimation);
        },
      })
      .to(loader, {
        y: "100vh",
        duration: 1.5,
        ease: "power4.in",
        delay: 2.5,
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
  }, [numberFlowDuration, numberFlowEase]);

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
      <div className="counter z-[2] text-[5vw] font-bold text-white">
        <NumberFlow
          transformTiming={{
            duration: numberFlowDuration,
            easing: numberFlowEase,
          }}
          plugins={[continuous]}
          trend={1}
          value={countValue}
        />
      </div>
    </div>
  );
};

export default IntroAnimation;
