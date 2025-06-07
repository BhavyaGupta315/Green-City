import { Menu, X } from "lucide-react"; // Optional: for mobile icon
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Green City</div>

        <div className="hidden md:flex space-x-6">
          {/* <a href="#home" className="hover:text-gray-300 transition">Home</a> */}
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          {/* <a href="#gallery" className="hover:text-gray-300 transition">Gallery</a> */}
          {/* <a href="#events" className="hover:text-gray-300 transition">Events</a> */}
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 flex flex-col bg-green-600 px-4 py-3 rounded">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#gallery" className="hover:text-gray-300 transition">Gallery</a>
          <a href="#events" className="hover:text-gray-300 transition">Events</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
