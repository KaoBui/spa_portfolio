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
    <div className="grid grid-cols-12 gap-12">
      <div className="relative col-start-1 col-end-13 overflow-hidden rounded-xl bg-gray px-[20%] py-16">
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
        <div className="mt-6 flex justify-center gap-4">
          <button
            className={`rounded-lg px-4 py-2 font-semibold tracking-wide ${
              !showAfter ? "bg-black text-white" : "bg-light text-white"
            }`}
            onClick={() => setShowAfter(false)}
          >
            Before
          </button>
          <button
            className={`rounded-lg px-4 py-2 font-semibold tracking-wide ${
              showAfter ? "bg-black text-white" : "bg-light text-white"
            }`}
            onClick={() => setShowAfter(true)}
          >
            After
          </button>
        </div>
      </div>
    </div>
  );
}
