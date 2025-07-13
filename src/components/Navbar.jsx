import { useEffect } from "react";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-lg sm:text-xl font-bold text-white touch-manipulation"
          >
            judy<span className="text-blue-500">.phan</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center text-white text-xl touch-manipulation select-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            role="button"
            aria-label="Toggle menu"
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors touch-manipulation"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors touch-manipulation"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors touch-manipulation"
            >
              Projects & Hackathons
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors touch-manipulation"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
