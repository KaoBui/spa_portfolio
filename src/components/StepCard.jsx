import { useState } from "react";

const StepCard = ({ step, title, objectives, findings }) => {
  const [activeTab, setActiveTab] = useState("objectives");

  return (
    <div className="flex flex-col gap-8 lg:gap-24 rounded-xl bg-gray p-8 lg:p-12">
      <div>
        <h2 className="text-5 leading-none font-light text-gray-3">
          {step}
        </h2>
        <p className="text-3 font-normal text-dark">{title}</p>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex flex-col lg:grid grid-cols-2 gap-6">
        <div className="border-gray-4 space-y-4 rounded-2xl border p-6">
          <p className="text-1 font-semibold text-dark">Objective</p>
          <p className="text-1 leading-relaxed text-light">
            {objectives}
          </p>
        </div>
        <div className="border-gray-4 space-y-4 rounded-2xl border p-6">
          <p className="text-1 font-semibold text-dark">Results</p>
          <p className="text-1 leading-relaxed text-light">
            {findings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
