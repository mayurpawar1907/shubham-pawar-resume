import { FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import image from "../assets/Logo1.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const colors = ["#00ffff", "#0ea5e9", "#06b6d4", "#3b82f6", "#f472b6"];

const stats = [
  { count: 3.5, suffix: "+", label: "Years Experience" },
  { count: 15, suffix: "+", label: "Projects Completed" },
  { count: 5, suffix: "+", label: "Companies Worked" },
  { count: 99.9, suffix: "%", label: "Uptime Achieved" },
];


function Firstpage() {
  const [colorIndex, setColorIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll bg-[#0f0f1b] text-white font-sans p-4 md:p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="bg-[#1c1c2b] rounded-[30px] w-full max-w-screen-xl mx-auto p-6 md:p-10 flex flex-col-reverse md:flex-row items-center justify-between shadow-[0_0_30px_#00f0ff99] mt-24"
      >
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          <h3 className="text-lg md:text-xl mb-2">Hello, It's Me</h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Shubham Patil</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6">
            Software Engineer – React.js | Node.js
          </h2>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
           Results-driven <span style={{color:"cyan", fontWeight:"700"}}>Full-Stack Web Developer</span> with 3.5+ years of experience building scalable SaaS, AgriTech, and Drone software applications. Specializing in React.js, Node.js, REST APIs, and modern cloud technologies. Passionate about delivering high-performance, user-centric products with measurable real-world impact.
          </p>

        
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex justify-center md:justify-start space-x-4 mb-6"
          >
            <motion.a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#24243c] hover:bg-cyan-500 p-3 rounded-full transition"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#24243c] hover:bg-cyan-500 p-3 rounded-full transition"
            >
              <FaTwitter />
            </motion.a>

            <motion.a
              href="https://github.com/mayurPatil1907"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#24243c] hover:bg-cyan-500 p-3 rounded-full transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mayur-Patil-8246402b8/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#24243c] hover:bg-cyan-500 p-3 rounded-full transition"
            >
              <FaLinkedinIn />
            </motion.a>
          </motion.div>

          {/* Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Shubham_Patil_Resume.pdf"
            download="Shubham_Patil_Resume.pdf"
            className="bg-cyan-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-cyan-300 transition inline-block"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 40px rgba(0, 255, 255, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-[30%] bg-gradient-to-br from-cyan-400 to-cyan-600 p-1 overflow-hidden border-4 border-cyan-300 shadow-[0_0_30px_#00f0ff66]"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-[30%] overflow-hidden bg-[#1c1c2b] border-4 border-cyan-300 shadow-[0_0_50px_#00f0ff50]"
            >
              <motion.div
                className="absolute inset-0 rounded-[30%] z-0"
                animate={{
                  boxShadow: [
                    "0 0 20px #00f0ff30",
                    "0 0 30px #00f0ff50",
                    "0 0 20px #00f0ff30",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-[30%] z-10 pointer-events-none" />
              <img
                src={image}
                alt="Profile"
                style={{position:"relative", top:"20px"}}
                className="relative z-10 w-full h-full object-cover rounded-[60%]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <div className="max-w-screen-xl mx-auto mt-12 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl text-cyan-400 mt-4"
        >
          Have an idea?
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="text-5xl font-bold text-cyan-400 mb-8 mt-2"
        >
          Let's talk about it
        </motion.h2>
      </div>

      {/* Stats Section */}
      <div
        ref={ref}
        className="max-w-screen-xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-4"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotate: index === 3 ? [0, 2, -2, 0] : 0,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#1c1c2b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/40 transition"
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              {inView && (
                <CountUp
                  start={0}
                  end={item.count}
                  duration={2}
                  suffix={item.suffix}
                />
              )}
            </h3>
            <p className="text-gray-300 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
  
}

export default Firstpage;
