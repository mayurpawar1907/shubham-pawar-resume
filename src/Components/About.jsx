'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

export default function AboutMe() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-[#0f0f1b] text-white px-6 py-16 md:px-20  font-[Poppins]"
    >
      {/* Section Heading */}
      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-6xl font-extrabold text-cyan-400 text-center mb-12 mt-12 tracking-wide leading-tight"
      >
        About Me
      </motion.h1>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-300">
        {[
          <>
            My name is <span className="text-cyan-400 font-semibold">Shubham Patil</span>, a results-driven{' '}
            <span className="text-cyan-400 font-semibold">Software Engineer</span> based in Nashik/Pune, Maharashtra, India
            with over 3.5+ years of experience building scalable full-stack web applications.
          </>,
          <>
            I specialize in <span className="text-cyan-400 font-semibold">SaaS, AgriTech, and Drone Software</span> domains, 
            leveraging cutting-edge technologies like React.js, Node.js, REST APIs, WebSocket, Firebase, and Google Maps API 
            to deliver high-performance solutions with measurable real-world impact.
          </>,
          <>
            With an <span className="text-cyan-400 font-semibold">entrepreneurial mindset</span> and strong technical foundation, 
            I am driven to build innovative digital solutions that enhance business operations and user experiences. As an active 
            tech community contributor and GDG & AWS User Group Nashik Co-Organizer, I believe in continuous learning and sharing knowledge.
          </>,
        ].map((text, i) => (
          <motion.p
            key={i}
            variants={i % 2 === 0 ? fadeLeft : fadeRight}
            className="text-[17px] md:text-[18px] text-gray-300 font-light tracking-wide"
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* Work Experience */}
      <motion.div variants={fadeUp} className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 tracking-wider">Work Experience</h2>
        <p className="text-lg leading-relaxed text-gray-300 font-light">
        3.5+ years of experience as a Full-Stack Software Engineer, proficient in both frontend and backend development across SaaS, AgriTech, and Drone software domains, with expertise in modern web technologies and enterprise-grade architectures.
        </p>
        <motion.ul className="list-disc list-inside mt-6 space-y-3" variants={containerVariants}>
          {[
            'Built dynamic, responsive, and reusable user interfaces using React.js, modern JavaScript (ES6+), HTML5, Tailwind CSS, and component-driven development practices.',
            'Developed secure and scalable RESTful APIs using Node.js and Express, implementing best practices for middleware, error handling, and modular architecture.',
            'Designed and optimized database schemas using MongoDB, MySQL, and SQLite with Firestore integration for offline-first applications and real-time data synchronization.',
            'Developed secure and scalable RESTful APIs using Node.js and Express.js, implementing JWT authentication, role-based access control, and WebSocket for real-time communication.',
            'Built dynamic, responsive, and scalable web interfaces using React.js, HTML5, CSS3, Tailwind CSS, Redux, and Context API with component-driven architecture principles.',
            'Integrated geospatial features including Google Maps API and Places SDK for mission planning, live location tracking, and geofencing across enterprise platforms.',
            'Implemented WebSocket-based real-time telemetry feeds and live tracking systems, achieving 99.9% uptime for mission-critical drone operations.',
            'Established reusable React component libraries and Node.js API patterns across products, reducing code duplication by 35% and accelerating feature delivery.',
            'Collaborated with cross-functional teams including product, design, and backend to deliver production-grade features in agile environments.',
            'Participated in code reviews, pair programming, and continuous improvement practices to enhance code quality and team collaboration.',
            'Maintained version control using Git, managing branches, pull requests, and code merges in complex collaborative environments.',
            'Engaged in continuous professional development to stay updated with latest industry trends and emerging technologies in web and drone software development.',
          




          ].map((text, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="text-gray-300 tracking-wide"
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Companies Worked At */}
      <motion.div variants={fadeUp} className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 tracking-wider">Companies Worked At</h2>
        <motion.ul className="space-y-6 text-gray-300" variants={containerVariants}>
          {[
            {
              company: 'Auxy AI',
              role: 'SDE – Platform',
              duration: 'Dec 2025 – Present',
            },
            {
              company: 'Passenger Drone Research Pvt. Ltd. (PDRL)',
              role: 'Senior Software Engineer – Web (React.js / Node.js)',
              duration: 'Apr 2025 – Jan 2026',
            },
            {
              company: 'Passenger Drone Research Pvt. Ltd. (PDRL)',
              role: 'Software Engineer – Web (React.js / Node.js)',
              duration: 'Jul 2024 – Aug 2025',
            },
            {
              company: 'Startup0km Pvt. Ltd.',
              role: 'Junior Consultant – Web Developer',
              duration: 'Aug 2022 – Jul 2024',
            },
            {
              company: 'Omnisure Solution Nashik',
              role: 'Internship Trainee',
              duration: 'Jun 2021 – Nov 2021',
            },
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="tracking-wide"
            >
              <span className="text-white font-semibold">{item.company}</span> – {item.role}
              <div className="text-sm text-gray-400">{item.duration}</div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Work Policy */}
      <motion.div variants={fadeRight} className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 tracking-wider">Work Philosophy</h2>
        <p className="text-lg leading-relaxed text-gray-300 font-light tracking-wide">
          I am deeply committed to building high-performance, user-centric digital products that create measurable real-world impact. 
          Whether architecting enterprise-grade platforms, optimizing real-time systems, or mentoring tech communities, I bring passion, 
          precision, and continuous learning to every project. My goal is to bridge the gap between complex technical challenges and elegant, 
          scalable solutions that drive business value and enhance user experiences.
        </p>
      </motion.div>
    </motion.div>
  );
}
