"use client";

import Link from "next/link";
import Image from "next/image";
import { FlipWords } from "./ui/flipwords";


/* ================= HERO ================= */
export default function Banner() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden px-6">

            {/* soft background glow (minimal, no corner blue issue) */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-orange-300 dark:bg-orange-800 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* ================= LEFT SIDE ================= */}
                <div className="text-left mt-28 lg:mt-0">

                    <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-600 dark:text-orange-400 uppercase bg-orange-100/60 dark:bg-orange-900/20 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                        Developer Never Die
                    </span>

                    <div className=" text-2xl lg:text-4xl font-bold mt-4">
                        <FlipWords
                            words={["Hello", "Hii"]}
                            duration={1000}
                            className="text-blue-600"
                        />
                    </div>

                    <h1 className="mt-3 ml-1.5 mb-5 text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        I&apos;m <span className="text-orange-500">Mahmud Reza Rafsun</span>
                    </h1>

                    <div className="text-3xl lg:text-5xl font-bold">
                        <FlipWords
                            words={[
                                "Full Stack Developer",
                                "Front-End Developer",
                                "Back-End Developer",
                                "MERN Stack Developer",
                            ]}
                            duration={2000}
                            className="text-blue-600"
                        />
                    </div>

                    <p className="mt-6 text-gray-700 dark:text-gray-300">
                        You&apos;ve never made a website this{" "}
                        <span className="text-orange-500 font-semibold">fast before</span>
                    </p>
                </div>
                {/* ================= RIGHT SIDE IMAGE ================= */}
                <div className="mt-32 lg:mt-0">
                    <div className="relative w-[320px] lg:w-[420px]">
                        <Image
                            src="/images.png"
                            alt="Hero Image"
                            width={500}
                            height={500}
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
