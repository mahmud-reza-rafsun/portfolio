"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const ProjectCard = ({
    title,
    image,
    description,
    techStack,
    clientRepo,
    serverRepo,
    liveLink,
}) => {
    return (
        <div className="group bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-[32px] p-5 shadow-xl dark:shadow-[0_0_60px_-15px_rgba(30,41,59,0.3)] hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 h-full flex flex-col">

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-68 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 tracking-tight">
                    {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Tech Stack Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-[11px] font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800/50">
                <div className="flex flex-wrap gap-3">
                    {/* Frontend Repo Button */}
                    <Link
                        href={clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit flex items-center gap-2 cursor-pointer bg-slate-100/50 dark:bg-white/5 backdrop-blur-md dark:text-gray-200 px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm active:scale-95 group"
                    >
                        <FaGithub size={18} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                        <span className="text-xs font-semibold">Frontend</span>
                    </Link>

                    {/* Backend Repo Button */}
                    <Link
                        href={serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit flex items-center gap-2 cursor-pointer bg-slate-100/50 dark:bg-white/5 backdrop-blur-md dark:text-gray-200 px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-200/50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm active:scale-95 group"
                    >
                        <FaGithub size={18} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                        <span className="text-xs font-semibold">Backend</span>
                    </Link>
                </div>

                {/* Live Preview - Fancy Style */}
                <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-indigo-500 hover:text-indigo-400 transition-all group/link bg-indigo-500/5 dark:bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 hover:border-indigo-500/40 backdrop-blur-sm"
                >
                    <span>Live Preview</span>
                    <FiExternalLink size={18} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

const Projects = () => {
    const myProjects = [
        {
            title: "Skill Bridge",
            image: "/skill-bridge.png", //
            description: "A full-stack tutor marketplace connecting learners with expert tutors.",
            techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Express", "BetterAuth"],
            liveLink: "https://skill-bridge-front-end.vercel.app/",
            clientRepo: "https://github.com/mahmud-reza-rafsun/skill_bridge_client",
            serverRepo: "https://github.com/mahmud-reza-rafsun/skill_bridge_back-end",
        },
        {
            title: "EcoSpark Hub",
            image: "/eco-spark-hub.png", //
            description: "Platform for sharing and funding sustainability ideas with community voting.",
            techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Express", "BetterAuth"],
            liveLink: "https://eco-spark-hub-frontend.vercel.app/",
            clientRepo: "https://github.com/mahmud-reza-rafsun/eco-spark-hub-frontend",
            serverRepo: "https://github.com/mahmud-reza-rafsun/eco-spark-hub-backend",
        },
    ];

    return (
        <section className="relative min-h-screen bg-white dark:bg-[#020617] py-24 px-6 overflow-hidden transition-colors duration-300">

            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-950/30 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-medium text-slate-900 dark:text-white mb-4 tracking-tight">
                        Projects
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        Here are some of my recent works.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                    {myProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;