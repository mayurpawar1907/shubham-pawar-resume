'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BsPatchCheckFill } from 'react-icons/bs';

const projectDetails = [
  {
    title: "AeroGCS Enterprise Platform",
    text: "Built an enterprise-grade Ground Control Station web platform with React.js dashboards for fleet management, mission scheduling, and live drone telemetry visualization; developed Node.js / Express REST APIs for data aggregation, user management, and operational reporting.",
  },
  {
    title: "AeroGCS Defence Systems",
    text: "Developed secure, high-reliability web modules for defence-grade drone operations including mission authorization workflows, restricted-zone mapping overlays, and encrypted real-time telemetry streams ensuring compliance with strict security standards.",
  },
  {
    title: "BhuMeet Web Ecosystem",
    text: "Designed and built the BhuMeet web portal enabling drone service providers, dealers, and administrators to manage service bookings, pilot assignments, fleet operations, revenue tracking, and analytics dashboards through a responsive React.js frontend backed by Node.js REST APIs.",
  },
  {
    title: "Real-Time Telemetry Visualization",
    text: "Implemented WebSocket-based live telemetry feeds across all GCS web platforms, enabling real-time drone status monitoring, mission updates, and interactive map visualizations with Google Maps API integration for mission zone drawing and geofencing.",
  },
  {
    title: "Performance & Architecture",
    text: "Established reusable React component libraries and Node.js API patterns across products, accelerating feature delivery and reducing code duplication by 35%, while implementing best practices for code quality and maintainability.",
  },
  {
    title: "Full-Stack Integration",
    text: "Integrated Firebase authentication, Firestore, Cloud Messaging for push notifications, and implemented token-based authorization with role-based access control across all web applications.",
  },
  {
    title: "Database Optimization",
    text: "Designed and optimized MongoDB and SQL schemas for high-performance data aggregation, implemented efficient CRUD operations with proper indexing, and established offline-first data synchronization patterns.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectOverview = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      style={{ width: '100%', paddingTop: '100px' }}
      className="overflow-x-hidden  shadow-[0_0_40px_#00f0ff33] p-6 md:p-10 bg-gradient-to-br from-[#0f0f1b] to-[#121223] border border-cyan-500/20"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-cyan-400 mb-6 text-center"
      >
        Enterprise SaaS & Drone Software Development
      </motion.h3>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-100 text-center text-base mb-8"
      >
        Key Projects & Technical Achievements:
      </motion.p>

      {/* List */}
      <motion.ul
        variants={containerVariants}
        className="space-y-6"
      >
        {projectDetails.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="flex items-start gap-4 bg-[#1a1a2b] hover:bg-[#23233a] p-5 rounded-lg transition-all duration-300 border border-cyan-400/10"
          >
            <span className="text-cyan-400 mt-1 animate-pulse">
              <BsPatchCheckFill size={20} />
            </span>
            <div>
              <h4 className="text-cyan-300 font-semibold text-lg mb-1">
                {item.title}
              </h4>
              <p className="text-gray-300 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ProjectOverview;
