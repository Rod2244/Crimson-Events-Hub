import Navbar from "../components/Navbar"
import LatestUpdates from "../components/LatestUpdates";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <main className="p-6">
        <LatestUpdates />
      </main>
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Homepage!</h1>
      </div>
    </div>
  );
}
