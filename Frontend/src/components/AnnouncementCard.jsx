import { Calendar, Users } from "lucide-react";
import Button from "./Button";

export default function AnnouncementCard({ category, color, title, desc, tags, time, date }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-2 border border-gray-100">
      <div className="flex justify-between items-center">
        <span className={`${color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
          {category}
        </span>
        <span className="text-xs text-gray-400">{time}</span>
      </div>

      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm text-gray-600">{desc}</p>

      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-700 border-t border-[#d64553] pt-3">
        {tags.map((t, i) => (
          <span key={i} className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
            <Users size={14} /> {t}
          </span>
        ))}
        <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
          <Calendar size={14} /> {date}
        </span>
      </div>

      <Button className="self-end mt-3 bg-[#d64553] hover:bg-[#c43b48] text-white text-sm px-4 py-1.5 rounded-full transition cursor-pointer">
        View Details
      </Button>
    </div>
  );
}
