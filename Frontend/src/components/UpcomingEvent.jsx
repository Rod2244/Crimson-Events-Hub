
export default function UpcomingEvent({ date, month, title, time }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="text-center w-12 h-12 bg-[#fff0f2] text-[#d64553] font-bold rounded-lg flex flex-col justify-center">
        <span>{date}</span>
        <span className="text-xs font-normal">{month}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
}
