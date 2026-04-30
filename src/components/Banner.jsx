"use client";

import { Send } from 'lucide-react';
import Image from "next/image";
import { FlipWords } from "./ui/flipwords";
import Link from 'next/link';

export default function Banner() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-[#f8fafc] dark:bg-[#020617] overflow-hidden px-6 transition-colors duration-500">

            {/* Background Ambient Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-indigo-400/10 dark:bg-indigo-900/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* ================= LEFT SIDE ================= */}
                <div className="text-left flex-1 lg:pr-10 mt-32 lg:mt-0">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-md border border-blue-200/50 dark:border-blue-500/20 rounded-full mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        Developer Never Die
                    </span>

                    <div className="text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-400">
                        <FlipWords
                            words={["Hello", "Greetings", "Welcome"]}
                            duration={2500}
                            className="text-slate-700 dark:text-slate-300"
                        />
                    </div>

                    <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400">Mahmud Reza Rafsun</span>
                    </h1>

                    <div className="mt-4 text-2xl lg:text-4xl font-bold h-12">
                        <FlipWords
                            words={[
                                "Full Stack Developer",
                                "Front-End Specialist",
                                "Back-End Architect",
                                "MERN Stack Expert",
                            ]}
                            duration={2500}
                            className="text-slate-700 dark:text-slate-300"
                        />
                    </div>

                    <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                        Crafting high-performance digital experiences. You&apos;ve never seen a workflow this{" "}
                        <span className="text-blue-600 dark:text-blue-400 font-bold underline underline-offset-4 decoration-blue-500/30">refined and fast.</span>
                    </p>

                    <div className='mt-10'>
                        <Link
                            href="https://www.linkedin.com/in/rafsun-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/btn w-fit h-14 px-10 flex items-center justify-center gap-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-base transition-all hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10">Hire Me Now</span>
                            <Send className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5" />

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-blue-400/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />

                            {/* Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
                        </Link>
                    </div>
                </div>

                {/* ================= RIGHT SIDE IMAGE ================= */}
                <div className="relative flex-1 flex justify-center lg:justify-end">
                    {/* Glass Container Behind Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-transparent rounded-[40px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="relative z-10 w-[300px] h-[380px] lg:w-[450px] lg:h-[550px] bg-white/5 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/20 dark:border-slate-800 rounded-[40px] p-4 shadow-2xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
                            <Image
                                src="/images.png"
                                alt="Mahmud Reza Rafsun"
                                width={600}
                                height={600}
                                priority
                                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Decorative floating glass elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 dark:bg-blue-500/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl z-20 animate-bounce transition-all duration-[3000ms]" />
                    </div>
                </div>

            </div>

            {/* Custom CSS for Shimmer - normally add this in globals.css */}
            <style jsx global>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    );
}