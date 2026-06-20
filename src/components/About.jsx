"use client";

import Image from "next/image";

const Card = ({
    children,
    className = ""
}) => (
    <div className={`h-full rounded-[32px] bg-white/10 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/20 dark:border-slate-800/80 p-8 sm:p-10 text-sm leading-7 text-gray-700 shadow-2xl transition-all duration-300 hover:border-blue-500/30 dark:hover:border-blue-500/30 ${className}`}>
        {children}
    </div>
);

const Badge = ({
    children,
    className = ""
}) => (
    <span className={`inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-2.5 text-[10px] font-bold text-blue-500 dark:text-blue-400 border border-indigo-100 dark:border-indigo-500/20 ${className}`}>
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
        <section id="about" className="relative min-h-screen bg-[#f8fafc] dark:bg-[#020617] py-24 px-6 overflow-hidden transition-colors duration-500">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-400/10 dark:bg-indigo-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto relative z-10 max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-medium text-slate-900 dark:text-white mb-4 tracking-tight">
                        About Me
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        Transforming ideas into high-performance digital reality through clean code and scalable full-stack solutions.
                    </p>
                </div>

                <div className="flex lg:flex-row flex-col items-stretch justify-center gap-4 sm:gap-6 lg:gap-10">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 group">
                        <div className="relative h-auto min-h-[300px] sm:min-h-[350px] lg:h-full lg:min-h-[500px]">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-transparent rounded-[40px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                            <div className="relative w-full aspect-square sm:aspect-video md:aspect-auto md:h-96 lg:h-full overflow-hidden rounded-[32px] bg-white/5 dark:bg-slate-900/20 backdrop-blur-2xl border border-white/20 dark:border-slate-800 p-4 shadow-2xl">
                                <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                                    <Image
                                        src="/about-me.png"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt="profile"
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                    />
                                    {/* Glass Overlay on Image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="w-full lg:w-1/2">
                        <Card>
                            <div className="flex flex-col h-full justify-between space-y-6 sm:space-y-8">
                                {data.map((item, index) => (
                                    <div key={item.id} className="relative group/item transition-all duration-300">
                                        {/* Timeline Line */}
                                        {index !== data.length - 1 && (
                                            <div className="absolute left-3 top-8 h-full w-0.5 bg-slate-200/50 dark:bg-slate-800/50 group-hover/item:bg-blue-500/30 transition-colors duration-300" />
                                        )}

                                        <div className="flex gap-4 sm:gap-5">
                                            {/* Dot */}
                                            <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 group-hover/item:bg-blue-500 transition-all duration-300">
                                                <div className="h-2 w-2 rounded-full bg-slate-400 group-hover/item:bg-white" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 pb-2">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1 sm:gap-0">
                                                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <Badge className="w-fit">{item.date}</Badge>
                                                </div>
                                                <p className="text-blue-600 dark:text-blue-400 font-semibold text-[13px] mb-2">
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