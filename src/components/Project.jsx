"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { section } from "motion/react-client";

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
        <section id="project">
            <div className="group bg-white/10 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/20 dark:border-slate-800/80 rounded-[32px] p-5 shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video w-full bg-slate-100 dark:bg-slate-900">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
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
                                className="text-[11px] font-medium px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Links */}
                <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/50 dark:border-slate-800/50">
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

                    {/* Live Preview Button */}
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
        </section>
    );
};

const Projects = () => {
    const myProjects = [
        {
            title: "Skill Bridge",
            image: "/skill-bridge.png",
            description: "A full-stack tutor marketplace connecting learners with expert tutors.",
            techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Express", "BetterAuth"],
            liveLink: "https://skill-bridge-front-end.vercel.app/",
            clientRepo: "https://github.com/mahmud-reza-rafsun/skill_bridge_client",
            serverRepo: "https://github.com/mahmud-reza-rafsun/skill_bridge_back-end",
        },
        {
            title: "EcoSpark Hub",
            image: "/eco-spark-hub.png",
            description: "Platform for sharing and funding sustainability ideas with community voting.",
            techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Express", "BetterAuth"],
            liveLink: "https://eco-spark-hub-frontend.vercel.app/",
            clientRepo: "https://github.com/mahmud-reza-rafsun/eco-spark-hub-frontend",
            serverRepo: "https://github.com/mahmud-reza-rafsun/eco-spark-hub-backend",
        },
    ];

    return (
        <section className="relative min-h-screen bg-[#f8fafc] dark:bg-[#020617] py-24 px-6 overflow-hidden transition-colors duration-500">

            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] bg-indigo-400/10 dark:bg-indigo-900/10 blur-[120px] rounded-full" />
            </div>

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