"use client";
import React, { useState } from "react";
import {
  Code,
  Monitor,
  Database,
  Globe,
  Server,
  Zap,
  Layers,
  Settings,
  Smartphone,
  Terminal,
  Cpu,
  CodeXml,
  Activity,
} from "lucide-react";

const PimjoLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-primary"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconWrapper = ({
  children,
  className = "",
  isHighlighted = false,
  isActive = false,
}) => (
  <div
    className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 
      ${
        isHighlighted
          ? "bg-orange-500 text-white shadow-lg scale-105"
          : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
      } ${isActive ? "ring-2 ring-indigo-400" : ""} ${className}`}
  >
    {children}
  </div>
);

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const skills = [
    { name: "Frontend", icon: <Monitor /> },
    { name: "Backend", icon: <Server /> },
    { name: "Database", icon: <Database /> },
    { name: "Full Stack", icon: <Layers /> },
    { name: "React", icon: <Activity /> },
    { name: "Next.js", icon: <Globe /> },
    { name: "JavaScript", icon: <CodeXml /> },
    { name: "Responsive", icon: <Smartphone /> },
    { name: "Performance", icon: <Zap /> },
    { name: "Dev Tools", icon: <Settings /> },
    { name: "CLI", icon: <Terminal /> },
    { name: "Linux", icon: <Cpu /> },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
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
              <div className="mb-2">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </IconWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
