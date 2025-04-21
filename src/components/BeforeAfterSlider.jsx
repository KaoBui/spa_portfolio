import { useState } from "react";

export default function BeforeAfterSlider({ beforeImg, afterImg }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="relative col-start-1 col-end-13 overflow-hidden rounded-xl bg-gray px-[20%] py-16">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        {/* After image (always full view in background) */}
        <img
          src={afterImg}
          alt="After"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Before image (slides to the left when hidden) */}
        <img
          src={beforeImg}
          alt="Before"
          className="absolute inset-0 h-full w-full object-cover object-top-left transition-all duration-1000 ease-in-out"
          style={{
            width: showAfter ? "0%" : "100%",
          }}
        />
      </div>

      {/* Toggle buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          className={`rounded px-4 py-2 font-semibold ${
            !showAfter ? "bg-black text-white" : "border bg-white text-black"
          }`}
          onClick={() => setShowAfter(false)}
        >
          Before
        </button>
        <button
          className={`rounded px-4 py-2 font-semibold ${
            showAfter ? "bg-black text-white" : "border bg-white text-black"
          }`}
          onClick={() => setShowAfter(true)}
        >
          After
        </button>
      </div>
    </div>
  );
}
