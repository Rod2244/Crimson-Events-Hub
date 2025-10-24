import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import Button from "./Button";
import { Search, Bell, LogOut, Contact } from "lucide-react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAboutus = () => {
    localStorage.removeItem("user"); 
    setShowMenu(false);
    navigate("/about"); 
  };
 
  const handleLogout = () => {
    localStorage.removeItem("user"); 
    setShowMenu(false);
    navigate("/login"); 
  };

  return (
    <header className="w-full bg-[#d64553] text-white py-2 px-6 flex items-center justify-between shadow-md relative">
      <Link to="/homepage" className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover shadow-md"
        />
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-lg">Crimson Events Hub</span>
          <span className="text-xs tracking-wide text-[#ffdada]">
            WMSU EVENT MANAGEMENT
          </span>
        </div>
      </Link>

      <div className="flex items-center bg-white rounded-full px-3 py-1 w-96 max-w-full">
        <Search size={16} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search events, announcements..."
          className="w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-4 relative" ref={menuRef}>
        <button className="bg-white text-[#d64553] p-2 rounded-full hover:bg-[#ffe6e9] transition">
          <Bell size={18} />
        </button>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center font-semibold cursor-pointer hover:bg-gray-700 transition"
        >
          M
        </button>

        {showMenu && (
          <div className="absolute right-0 top-12 bg-white text-gray-800 shadow-lg rounded-xl w-40 py-2 z-50">
            <p className="px-4 py-2 text-sm border-b">
              Logged in as <span className="font-semibold">Marie</span>
            </p>
            <Button
              onClick={handleAboutus}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 transition"
            >
              <Contact size={16} /> About Us
            </Button>
            <Button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-100 transition"
            >
              <LogOut size={16} /> Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
