import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// 👉 Animated Logo + Heading + Name
function AnimatedName() {
  const colors = ["#22d3ee", "#38bdf8", "#06b6d4", "#a855f7", "#f472b6"];
  const heading = "MERN-Stack Developer";
  const name = "Shubham Patil .";
  const [colorIndex, setColorIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCycleKey((prev) => prev + 1);
        setColorIndex((prev) => (prev + 1) % colors.length);
        setVisible(true);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, staggerDirection: 1 } },
    exit: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
  };

  const letter = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  return (
    <div className="flex flex-col gap-1 leading-tight font-bold tracking-wider md:h-20 lg:h-12">
      {/* 🔧 Smaller Heading */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[11px] sm:text-sm text-white font-semibold flex items-center gap-2"
      >
        <motion.span
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FaCode className="text-cyan-400  sm:text-3xl" />
        </motion.span>
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-[25px]">
          {name}
        </span>
      </motion.div>

      {/* 🔥 Enlarged Name */}
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={cycleKey}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" text-[9px] sm:text-2xl md:text-3xl  flex gap-[2px] ml-10"
            style={{ color: colors[colorIndex] }}
          >
            {heading.split("").map((char, i) => (
              <motion.span key={i} variants={letter} className="text-[15px]">
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// 👉 Main Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
      : "hover:text-cyan-400";

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsLoggedIn(auth === "true");
  }, [localStorage.getItem("isAuthenticated")]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1c1c2bcc] backdrop-blur-md text-white px-6 sm:px-8 py-5 shadow-lg z-[9999]">
      <div className="flex items-center justify-between">
        {/* 👤 Logo & Name */}
        <div className="flex flex-col">
          <AnimatedName />
        </div>

        {/* 💻 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><NavLink to="/" className={navStyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={navStyle}>About</NavLink></li>
          <li><NavLink to="/skills" className={navStyle}>Skills</NavLink></li>
          <li><NavLink to="/work" className={navStyle}>Work</NavLink></li>
          <li><NavLink to="/contact" className={navStyle}>Contact</NavLink></li>
          {isLoggedIn && <li><NavLink to="/notes" className={navStyle}>Notes</NavLink></li>}
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-600 font-semibold"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              {/* <li><NavLink to="/signup" className={navStyle}>Signup</NavLink></li>
              <li><NavLink to="/login" className={navStyle}>Login</NavLink></li> */}
            </>
          )}
        </ul>

        {/* 📱 Toggle Mobile Menu */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* 📱 Mobile Menu Items */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-lg font-medium bg-[#1c1c2b] border-t border-gray-600 pt-4 pb-2 px-2 relative z-[9998]">
          <li><NavLink to="/" className={navStyle} onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={navStyle} onClick={toggleMenu}>About</NavLink></li>
          <li><NavLink to="/skills" className={navStyle} onClick={toggleMenu}>Skills</NavLink></li>
         <li><NavLink to="/work" className={navStyle} onClick={toggleMenu}>Work</NavLink></li>
          <li><NavLink to="/contact" className={navStyle} onClick={toggleMenu}>Contact</NavLink></li>
          {isLoggedIn && <li><NavLink to="/notes" className={navStyle} onClick={toggleMenu}>Notes</NavLink></li>}
          {isLoggedIn ? (
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-red-400 hover:text-red-600 font-semibold"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              {/* <li><NavLink to="/signup" className={navStyle} onClick={toggleMenu}>Signup</NavLink></li>
              <li><NavLink to="/login" className={navStyle} onClick={toggleMenu}>Login</NavLink></li> */}
            </>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
