import { useState, useEffect } from "react";
import Button from "./Button";
import AnnouncementCard from "./AnnouncementCard";

export default function LatestUpdates() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Academic",
    "Organizations",
    "Non-Academic",
    "Council Events",
  ];

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
        setLoading(false);
      });
  }, []);

  const filteredAnnouncements =
    activeCategory === "All"
      ? announcements
      : announcements.filter((a) => a.category === activeCategory);

  return (
    <section className="bg-gray-100 py-4 px-6 border-t border-[#d64553]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Latest Updates
      </h2>

      <div className="flex flex-wrap gap-3 mb-5">
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
      {loading ? (
        <p className="text-gray-500 text-center py-8">Loading announcements...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((item) => (
              <AnnouncementCard key={item.id} {...item} />
            ))
          ) : (
            <p className="text-gray-500 text-center py-8">
              No announcements found in this category.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
