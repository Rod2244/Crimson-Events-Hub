export default function CalendarCard() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">September 2025</h3>
        <button className="text-[#d64553] text-sm font-medium hover:underline">
          View Calendar
        </button>
      </div>
      <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        Calendar Preview
      </div>
    </div>
  );
}
