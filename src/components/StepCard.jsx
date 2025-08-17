import { useState } from "react";

const StepCard = ({ step, title, objectives, findings }) => {
  const [activeTab, setActiveTab] = useState("objectives");

  return (
    <div className="flex min-h-[420px] w-full flex-col gap-[25vh] rounded-xl bg-gray p-8">
      {/* Step Number + Title */}
      <div>
        <h2 className="mb-2 text-5 leading-none font-light text-gray-3">
          {step}
        </h2>
        <p className="text-2 font-normal text-dark">{title}</p>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="mb-2 flex gap-4">
          <button
            onClick={() => setActiveTab("objectives")}
            className={`text-1 ${
              activeTab === "objectives"
                ? "font-semibold text-gray-1"
                : "text-gray-3"
            }`}
          >
            Objectives
          </button>
          <button
            onClick={() => setActiveTab("findings")}
            className={`text-1 ${
              activeTab === "findings"
                ? "font-semibold text-gray-1"
                : "text-gray-3"
            }`}
          >
            Findings
          </button>
        </div>

        {/* Tab Content */}
        <p className="text-1 leading-relaxed text-gray-1">
          {activeTab === "objectives" ? objectives : findings}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
