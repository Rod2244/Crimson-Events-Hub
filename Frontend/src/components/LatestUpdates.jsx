import { useState } from "react";
import Button from "./Button";
import AnnouncementCard from "./AnnouncementCard";

export default function LatestUpdates() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Academic",
    "Organizations",
    "Non-Academic",
    "Council Events",
  ];

  const announcements = [
    {
      id: 1,
      category: "Academic",
      color: "bg-[#a22c36]",
      title: "Midterm Examination Schedule for AY 2024–2025",
      desc: "The midterm examinations will be conducted from September 29 to October 3, 2025. Students are advised to check their respective department schedules for specific exam times.",
      tags: ["Registrar’s Office", "All Students"],
      time: "2 hours ago",
      date: "Sept 29–Oct 3, 2025",
    },
    {
      id: 2,
      category: "Organization",
      color: "bg-green-600",
      title: "CCS Tech Summit 2025 – Call for Volunteers",
      desc: "The College of Computing is organizing the annual Tech Summit. We’re looking for enthusiastic volunteers to help make this event successful!",
      tags: ["CCS Student Council"],
      time: "5 hours ago",
      date: "Nov 15, 2025",
    },
    {
      id: 3,
      category: "Non-Academic",
      color: "bg-yellow-500",
      title: "Annual Intramurals 2025 Registration Now Open",
      desc: "Sign up for this year’s intramurals! Various sports categories available including basketball, volleyball, badminton, and chess. Registration deadline: September 25, 2025.",
      tags: ["Sports Development Office"],
      time: "1 day ago",
      date: "Oct 20–24, 2025",
    },
  ];

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
    </section>
  );
}
