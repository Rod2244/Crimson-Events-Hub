import Navbar from "../components/Navbar"
import LatestUpdates from "../components/LatestUpdates";
import Dashboard from "../components/Dashboard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <main className="p-6">
        <LatestUpdates />
        <Dashboard />
      </main>
    </div>
  );
}
