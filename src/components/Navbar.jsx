import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <nav className="sticky top-0 bg-transparent backdrop-blur-md z-10">
        {/* Desktop Navbar */}
        <div className="justify-between items-center px-8 py-4 hidden lg:flex">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg p-2 rounded-lg shadow-lg">
            Uday Sathyanarayana
          </div>
          <div className="flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {menuItems.map((item) => (
                  <li
                      className="cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-200"
                      key={item.id}
                  >
                    {item.label}
                  </li>
              ))}
            </ul>
            <a
                href="https://github.com/UDAY525"
                className="cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
                href="https://www.linkedin.com/in/uday-b58812221"
                className="cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden justify-between items-center p-4 bg-gray-800 shadow-lg">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg p-2 rounded-lg shadow-lg">
            Uday Sathyanarayana
          </div>
          <button onClick={handleMobileMenuToggle} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? (
                <IoClose className="text-blue-500 text-4xl" />
            ) : (
                <TiThMenu className="text-blue-500 text-4xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
            className={`lg:hidden bg-gray-800 overflow-hidden ${
                menuOpen ? "slide-down shadow-lg" : "slide-up pointer-events-none"
            }`}
        >
          <ul className="flex flex-col justify-center items-center space-y-3 p-4">
            {menuItems.map((item) => (
                <li
                    className="cursor-pointer text-center text-gray-200 hover:text-blue-400 transition-colors duration-200"
                    key={item.id}
                    onClick={handleMobileMenuToggle}
                >
                  {item.label}
                </li>
            ))}
            <div className="flex mt-3 justify-center items-center space-x-6">
              <a
                  href="https://github.com/UDAY525"
                  className="cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-200"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                  href="https://www.linkedin.com/in/uday-b58812221"
                  className="cursor-pointer text-gray-200 hover:text-blue-400 transition-colors duration-200"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;