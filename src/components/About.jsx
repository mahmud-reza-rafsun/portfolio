"use client";

import Image from "next/image";

const Card = ({
    children,
    className = ""
}) => (
    /* h-full যুক্ত করা হয়েছে যাতে ডান পাশের ইমেজের সাথে হাইট সমান থাকে */
    <div className={`h-full rounded-[32px] bg-white/60 dark:bg-slate-950/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 sm:p-10 text-sm leading-7 text-gray-700 shadow-xl dark:shadow-white/5 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-600 ${className}`}>
        {children}
    </div>
);

const Badge = ({
    children,
    className = ""
}) => (
    <span className={`inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-2.5 text-[10px] font-bold text-indigo-600 dark:text-blue-400 border border-indigo-100 dark:border-indigo-500/20 ${className}`}>
        {children}
    </span>
);

const defaultTimelineData = [
    {
        id: "1",
        title: "IT & Reporting",
        company: "Sales Connect Ltd.",
        date: "2025 - Present",
        description: "Lead development team, implemented IT Support"
    },
    {
        id: "2",
        title: "Data Entry Operator",
        company: "Market Express Ltd.",
        date: "2022 - 2024",
        description: "Developed client projects using modern web technologies."
    },
    {
        id: "3",
        title: "CMS Platform",
        company: "Government Project",
        date: "2021",
        description: "Built complete CMS Content solution with 99.9% uptime."
    },
    {
        id: "4",
        title: "Business Studies",
        company: "Kathalia Pilot School",
        date: "2016 - 2021",
        description: "Secondary School Certificate, focus on Finance."
    }
];

export default function About({
    data = defaultTimelineData
}) {
    return (
        <section className="relative min-h-screen bg-white dark:bg-[#020617] py-24 px-6 overflow-hidden transition-colors duration-300">

            {/* Background Glow Effects */}
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-950/30 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-950/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10 max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-medium text-slate-900 dark:text-white mb-4 tracking-tight">
                        About Me
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        Transforming ideas into high-performance digital reality through clean code and scalable full-stack solutions.
                    </p>
                </div>

                <div className="flex lg:flex-row flex-col items-stretch justify-center gap-8 lg:gap-10">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 group">
                        <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[32px] blur-sm group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-slate-200 dark:border-slate-800">
                                <Image
                                    src="/about-me.png"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt="profile"
                                    priority
                                />
                                {/* Glass Overlay on Image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="w-full lg:w-1/2">
                        <Card>
                            <div className="flex flex-col h-full justify-between space-y-8">
                                {data.map((item, index) => (
                                    <div key={item.id} className="relative group/item transition-all duration-300">
                                        {/* Timeline Line */}
                                        {index !== data.length - 1 && (
                                            <div className="absolute left-3 top-8 h-full w-0.5 bg-slate-100 dark:bg-slate-800/50 group-hover/item:bg-indigo-500/30 transition-colors duration-300" />
                                        )}

                                        <div className="flex gap-5">
                                            {/* Dot */}
                                            <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover/item:bg-indigo-500 transition-all duration-300">
                                                <div className="h-2 w-2 rounded-full bg-slate-400 group-hover/item:bg-white" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover/item:text-indigo-500 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <Badge>{item.date}</Badge>
                                                </div>
                                                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-[13px] mb-2">
                                                    {item.company}
                                                </p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}