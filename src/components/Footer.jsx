"use client";

import React from "react";

function Footer() {
    const socialIcons = [
        {
            name: "X",
            href: "https://x.com/rafsun_dev",
            svg: (
                <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/rafsun-dev",
            svg: (
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
            ),
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/rafsun.dev",
            svg: (
                <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
            ),
        },
        {
            name: "Threads",
            href: "https://www.threads.com/@rafsun__mahmud",
            svg: (
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4"></path>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/rafsun__mahmud",
            svg: (
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
            ),
        },
    ];

    return (
        <footer className="relative w-full py-12 px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl border border-white/10 dark:border-slate-800 rounded-[40px] p-10 shadow-2xl flex flex-col items-center text-center">

                    {/* Brand Section */}
                    <div className="mb-8 group cursor-default">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent tracking-tight">
                            Mahmud Reza <span className="text-blue-500">Rafsun</span>
                        </h2>
                    </div>

                    {/* Social Icons Container with Button Styling */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                        {socialIcons.map((icon) => (
                            <a
                                key={icon.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={icon.name}
                                href={icon.href}
                                className="relative group/btn overflow-hidden w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-400/10 dark:bg-blue-500/10 backdrop-blur-xl border border-white/20 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 transition-all hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] active:scale-95 shadow-sm"
                            >
                                {/* Icon with Hover Animation */}
                                <svg
                                    className="relative z-10 size-6 transition-transform duration-500 group-hover/btn:scale-110 group-hover/btn:-rotate-12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    {icon.svg}
                                </svg>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-blue-400/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />

                                {/* Inner Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
                            </a>
                        ))}
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-8"></div>

                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-medium text-slate-500">
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                        <span className="hidden md:block w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                        <p>Built by Rafsun</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;