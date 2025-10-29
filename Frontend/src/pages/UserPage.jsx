import Navbar from "../components/Navbar";

const SettingsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Settings Page</h1>
            <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">User Settings</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your email"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsPage;