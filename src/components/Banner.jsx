"use client";

import { Send, Download } from "lucide-react";
import Image from "next/image";
import { FlipWords } from "./ui/flipwords";
import Link from "next/link";

// --- Custom Icons ---

const GithubIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const DiscordIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.14 96.36"
        fill="currentColor"
        {...props}
    >
        <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0 105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.71 56.6.54 80.21h0A105.73 105.73 0 0 0 32.71 96.36a77.7 77.7 0 0 0 6.89-11.27c-5.89-1.75-11.51-4.33-16.74-7.69a72.63 72.63 0 0 0 5.48-4.14A75.14 75.14 0 0 0 88.74 73.3a72.63 72.63 0 0 0 5.48 4.14c-5.23 3.36-10.85 5.94-16.74 7.69a77.7 77.7 0 0 0 6.89 11.27 105.73 105.73 0 0 0 32.17-16.15h0c2.25-23.61-2.25-47.56-18.85-72.12zM42.45 65.69c-6.35 0-11.6-5.83-11.6-13s5.11-13 11.6-13 11.66 5.83 11.6 13-5.11 13-11.6 13zm42.24 0c-6.35 0-11.6-5.83-11.6-13s5.11-13 11.6-13 11.66 5.83 11.6 13-5.11 13-11.6 13z" />
    </svg>
);

const socialLinks = [
    {
        href: "https://github.com/mahmud-reza-rafsun",
        icon: GithubIcon,
        label: "GitHub",
        hoverBg: "hover:bg-slate-800",
        hoverBorder: "hover:border-slate-500",
        hoverShadow: "hover:shadow-[0_0_20px_rgba(148,163,184,0.25)]",
    },
    {
        href: "https://www.linkedin.com/in/rafsun-dev",
        icon: LinkedinIcon,
        label: "LinkedIn",
        hoverBg: "hover:bg-blue-600",
        hoverBorder: "hover:border-blue-400",
        hoverShadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]",
    },
    {
        href: "https://discord.com/users/mahmud_reza_rafsun",
        icon: DiscordIcon,
        label: "Discord",
        hoverBg: "hover:bg-indigo-600",
        hoverBorder: "hover:border-indigo-400",
        hoverShadow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]",
    },
];

export default function Banner() {
    return (
        <div id="#home" className="relative w-full min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#020617] overflow-hidden px-6 transition-colors duration-500">

            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-indigo-400/10 dark:bg-indigo-900/10 blur-[120px] rounded-full" />
            </div>

            {/* Left Sidebar Social Links (Desktop Only) */}
            <div className="fixed left-5 xl:left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-slate-300/50 dark:via-slate-600/50 to-slate-300/50 dark:to-slate-600/50" />
                {socialLinks.map(({ href, icon: Icon, label, hoverBg, hoverBorder, hoverShadow }) => (
                    <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className={`group relative w-11 h-11 flex items-center justify-center rounded-2xl bg-white/10 dark:bg-slate-800/40 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 text-slate-400 hover:text-white ${hoverBg} ${hoverBorder} ${hoverShadow} transition-all duration-300 hover:-translate-y-1 active:scale-95`}
                    >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        <span className="absolute left-14 px-3 py-1 text-xs font-semibold text-white bg-slate-800 dark:bg-slate-700 rounded-lg opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none">
                            {label}
                        </span>
                    </Link>
                ))}
                <div className="w-px h-20 bg-gradient-to-b from-slate-300/50 dark:from-slate-600/50 via-slate-300/50 dark:via-slate-600/50 to-transparent" />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 py-24 lg:py-0">

                {/* Left Content (Text and Buttons) */}
                <div className="text-left flex-1 lg:pl-4 lg:pr-10 w-full">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-md border border-blue-200/50 dark:border-blue-500/20 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        Developer Never Die
                    </span>

                    <div className="text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-400">
                        <FlipWords words={["Hello", "Greetings", "Welcome"]} duration={1500} className="text-slate-700 dark:text-slate-300" />
                    </div>

                    <h1 className="mt-3 text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400">Mahmud Reza Rafsun</span>
                    </h1>

                    <div className="mt-4 text-xl lg:text-3xl xl:text-4xl font-bold h-12">
                        <FlipWords words={["Full Stack Developer", "Front-End Specialist", "Back-End Architect", "MERN Stack Expert"]} duration={2500} className="text-slate-700 dark:text-slate-300" />
                    </div>

                    <p className="mt-8 text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                        Crafting high-performance digital experiences with modern technologies and pixel-perfect UI/UX.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="https://www.linkedin.com/in/rafsun-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/btn w-fit h-13 px-8 py-3.5 flex items-center justify-center gap-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-base transition-all hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10">Hire Me Now</span>
                            <Send className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5" />
                        </Link>

                        <a
                            href="/Resume_Full_Stack_Developer.pdf"
                            download="Mahmud_Reza_Rafsun_CV.pdf"
                            className="relative group/cv w-fit h-13 px-8 py-3.5 flex items-center justify-center gap-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-base transition-all hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10">Download CV</span>
                            <Download className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover/cv:translate-y-1" />
                        </a>
                    </div>

                    {/* Mobile Only Social Links */}
                    <div className="mt-8 flex items-center gap-3 lg:hidden">
                        <span className="text-xs text-slate-400 dark:text-slate-600 font-medium tracking-wider uppercase">Follow</span>
                        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                        {socialLinks.map(({ href, icon: Icon, label, hoverBg, hoverBorder, hoverShadow }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={`group w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 dark:bg-slate-800/40 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 text-slate-400 hover:text-white ${hoverBg} ${hoverBorder} ${hoverShadow} transition-all duration-300 active:scale-90`}
                            >
                                <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Content (Profile Image/Card) */}
                <div className="relative flex-1 flex justify-center lg:justify-end w-full">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-transparent rounded-[40px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="relative z-10 w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] lg:w-[420px] lg:h-[520px] xl:w-[450px] xl:h-[550px] bg-white/5 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/20 dark:border-slate-800 rounded-[40px] p-4 shadow-2xl flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                                <Image
                                    src="/images.png"
                                    alt="Mahmud Reza Rafsun"
                                    width={600}
                                    height={600}
                                    priority
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}