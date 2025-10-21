import AnnouncementCard from "./AnnouncementCard";
import UpcomingEvent from "./UpcomingEvent";
import CalendarCard from "./CalendarCard";
import QuickActions from "./QuickAction";

export default function Dashboard() {
  const announcements = [
    {
      id: 1,
      category: "ACADEMIC",
      color: "bg-[#d64553]",
      title: "Midterm Examination Schedule for AY 2024–2025",
      desc: "The midterm examinations will be conducted from September 29 to October 3, 2025. Students are advised to check their respective department schedules for specific exam times.",
      tags: ["Registrar’s Office", "All Students"],
      time: "2 hours ago",
      date: "Sept 29–Oct 3, 2025",
    },
    {
      id: 2,
      category: "ORGANIZATION",
      color: "bg-green-600",
      title: "CCS Tech Summit 2025 – Call for Volunteers",
      desc: "The College of Computing is organizing the annual Tech Summit. We're looking for enthusiastic volunteers to help make this event successful!",
      tags: ["CCS Student Council"],
      time: "5 hours ago",
      date: "Nov 15, 2025",
    },
    {
      id: 3,
      category: "Non-Academic",
      color: "bg-yellow-500",
      title: "Annual Intramurals 2025 Registration Now Open",
      desc: "Sign up for this year's intramurals! Various sports categories available including basketball, volleyball, badminton, and chess. Registration deadline: September 25, 2025.",
      tags: ["Sports Development Office"],
      time: "1 day ago",
      date: "Oct 20–24, 2025",
    },
  ];

  const upcoming = [
    { date: "21", month: "Sept", title: "Career Fair 2025", time: "9:00 AM – 4:00 PM" },
    { date: "25", month: "Sept", title: "Research Symposium", time: "1:00 PM – 5:00 PM" },
    { date: "29", month: "Sept", title: "Midterm Exams Begin", time: "All Day" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-800 space-y-6">
      {/* Announcements */}
      <div className="space-y-4">
        {announcements.map((a) => (
          <AnnouncementCard key={a.id} {...a} />
        ))}
      </div>

      {/* Calendar + Upcoming */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CalendarCard />
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 md:col-span-2">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Upcoming Events</h3>
            <button className="text-[#d64553] text-sm font-medium hover:underline">
              View All
            </button>
          </div>
          <div className="divide-y">
            {upcoming.map((u, i) => (
              <UpcomingEvent key={i} {...u} />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions onSubmit={() => alert("Redirect to submission form")} />
    </div>
  );
}
