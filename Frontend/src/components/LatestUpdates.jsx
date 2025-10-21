import { useState } from "react";
import Button from "./Button";

export default function LatestUpdates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Academic",
    "Organizations",
    "Non-Academic",
    "Council Events",
  ];

  return (
    <section className="bg-gray-100 py-4 px-6 border-t border-[#d64553]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Latest Updates</h2>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const styles = isActive
            ? "bg-[#a22c36] text-white border-[#a22c36]"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200";

          return (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition-all cursor-pointer ${styles}`}
            >
              {category}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
