"use client";
import React, { useState } from "react";

// React Icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker,
  SiVercel,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiLinux,
} from "react-icons/si";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaMobileAlt,
  FaBolt,
  FaTerminal,
  FaCogs,
} from "react-icons/fa";

const IconWrapper = ({
  children,
  className = "",
  isHighlighted = false,
  isActive = false,
}) => (
  <div
    className={`flex flex-col items-center justify-center h-28 p-4 rounded-2xl transition-all duration-300 
      ${isHighlighted
        ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
        : "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
      } 
      ${isActive ? "ring-2 ring-indigo-400" : ""} 
      ${className}`}
  >
    {children}
  </div>
);

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const skills = [
    // 🧠 Core
    { name: "Frontend", icon: <FaLaptopCode /> },
    { name: "Backend", icon: <FaServer /> },
    { name: "Full Stack", icon: <FaTools /> },
    { name: "Database", icon: <FaDatabase /> },

    // ⚛️ Frontend Tech
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" /> },

    // 🔙 Backend Tech
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Prisma", icon: <SiPrisma /> },

    // 🗄️ Database
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },

    // ⚙️ DevOps / Tools
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Linux", icon: <SiLinux /> },

    // 🚀 Others
    { name: "Responsive", icon: <FaMobileAlt /> },
    { name: "Performance", icon: <FaBolt /> },
    { name: "Dev Tools", icon: <FaCogs /> },
    { name: "CLI", icon: <FaTerminal /> },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-black min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          My Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Here are some technologies and tools I work with.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-5 lg:px-0">
        {skills.map((skill, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <IconWrapper isHighlighted={activeIndex === index}>

              {/* Icon */}
              <div className="mb-2 text-3xl flex items-center justify-center">
                {skill.icon}
              </div>

              {/* Name */}
              <p className="font-medium text-center">
                {skill.name}
              </p>

            </IconWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;