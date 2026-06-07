import { useState } from "react";
import DescriptionTab from "./Description";
import AdditionalInfoTab from "./Additionalinfo";
import ReviewsTab from "./Review";


export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-20">
      <div className="flex flex-wrap gap-3 border-b pb-4">
        <button
          onClick={() => setActiveTab("description")}
          className={`rounded-xl px-5 py-3 transition ${
            activeTab === "description"
              ? "bg-black text-white"
              : "border"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("info")}
          className={`rounded-xl px-5 py-3 transition ${
            activeTab === "info"
              ? "bg-black text-white"
              : "border"
          }`}
        >
          Additional Info
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`rounded-xl px-5 py-3 transition ${
            activeTab === "reviews"
              ? "bg-black text-white"
              : "border"
          }`}
        >
          Reviews
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "description" && <DescriptionTab />}

        {activeTab === "info" && <AdditionalInfoTab />}

        {activeTab === "reviews" && <ReviewsTab />}
      </div>
    </div>
  );
}