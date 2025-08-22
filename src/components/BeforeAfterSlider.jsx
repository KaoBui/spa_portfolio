import { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BeforeAfterSlider({ beforeImg, afterImg }) {
  const [showAfter, setShowAfter] = useState(false);
  const maskRef = useRef();

  useGSAP(
    () => {
      if (!maskRef.current) return;

      gsap.to(maskRef.current, {
        duration: 1,
        ease: "power3.out",
        "--a": showAfter ? "100%" : "0%",
      });
    },
    { dependencies: [showAfter], scope: maskRef },
  );
  return (
    <div className="lg:grid grid-cols-12 gap-12">
      <div className="relative col-start-1 col-end-13 overflow-hidden rounded-xl bg-gray p-4 lg:px-[20%] lg:py-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          <img
            src={afterImg}
            alt="After"
            className="relative z-0 h-full w-full object-cover object-top"
          />
          <img
            ref={maskRef}
            src={beforeImg}
            alt="Before"
            className="absolute inset-0 h-full w-full object-cover object-top"
            style={{
              "--a": "0%",
              clipPath: "inset(0 var(--a) 0 0)",
            }}
          />
        </div>
        {/* Toggle buttons */}
        <div className="mt-6 flex justify-center">
          <div className="relative flex gap-4 rounded-full border-8 border-black bg-black p-1">
            <div
              className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-gray"
              style={{
                transform: !showAfter ? "translateX(0)" : "translateX(100%)",
                transition: "transform 0.3s ease -out",
              }}
            ></div>
            <button
              className={`text-1 z-10 rounded-lg px-4 py-0 tracking-wide ${
                !showAfter ? "text-black" : "text-white"
              }`}
              onClick={() => setShowAfter(false)}
            >
              Before
            </button>
            <button
              className={`text-1 z-10 rounded-lg px-4 py-0 tracking-wide ${
                !showAfter ? "text-white" : "text-black"
              }`}
              onClick={() => setShowAfter(true)}
            >
              After
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
