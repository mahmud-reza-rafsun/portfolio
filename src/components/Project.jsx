"use client";
import React from "react";
import { FaGithub } from "react-icons/fa"; // React Icons GitHub
import { FiExternalLink } from "react-icons/fi"; // React Icons External Link
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
        <div className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-orange-500/40 via-transparent to-orange-500/40 hover:from-orange-500 hover:to-orange-600 transition-all duration-500">

            {/* Inner Card */}
            <div className="bg-white/80 dark:bg-[#0b0b0b]/90 backdrop-blur-xl rounded-3xl h-full flex flex-col justify-between">
                <div>
                    {/* Image */}
                    <img
                        src={image}
                        alt={title}
                        className="rounded-xl"
                    />
                </div>
                {/* Top Content */}
                <div>
                    {/* Header (your style kept) */}
                    <div className="p-3 border-b border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                            {title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="p-6 flex flex-wrap gap-2">
                        {techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-black border border-orange-200 dark:border-orange-800 text-gray-700 dark:text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="px-6 pb-6 flex items-center justify-between">

                    <Link
                        href={clientRepo}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                    >
                        <FaGithub size={18} />
                        Client Repo
                    </Link>

                    <Link
                        href={serverRepo}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                    >
                        <FaGithub size={18} />
                        Server Repo
                    </Link>

                    <Link
                        href={liveLink}
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
                    >
                        Live Preview
                        <FiExternalLink size={18} />
                    </Link>

                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const myProjects = [
        {
            title: "Skill Bridge",
            image: "/skill-bridge.png",
            description:
                "A full-stack tutor marketplace connecting learners with expert tutors.",
            techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Express", "BetterAuth"],
            liveLink: "https://skill-bridge-front-end.vercel.app/",
            clientRepo:
                "https://github.com/mahmud-reza-rafsun/skill_bridge_client",
            serverRepo:
                "https://github.com/mahmud-reza-rafsun/skill_bridge_back-end",
        },
        {
            title: "EcoSpark Hub",
            image: "/eco-spark-hub.png",
            description:
                "Platform for sharing and funding sustainability ideas with community voting.",
            techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Express", "BetterAuth"],
            liveLink: "https://eco-spark-hub-frontend.vercel.app/",
            clientRepo:
                "https://github.com/mahmud-reza-rafsun/eco-spark-hub-frontend",
            serverRepo:
                "https://github.com/mahmud-reza-rafsun/eco-spark-hub-backend",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-[#050505] py-24 px-6">

            {/* Section Header */}
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    My Project
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Here are some projects and i work with this project.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {myProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

        </section>
    );
};

export default Projects;
