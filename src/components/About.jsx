"use client";

import Image from "next/image";

const Card = ({
    children,
    className = ""
}) => <div className={`rounded-2xl bg-white p-12 text-sm leading-7 text-gray-700 shadow-lg shadow-black/5 dark:bg-gray-950 dark:text-gray-300 dark:shadow-white/5 ${className}`}>
        {children}
    </div>;
const Badge = ({
    children,
    className = ""
}) => <span className={`inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-sky-900/30 dark:text-orange-300 ${className}`}>
        {children}
    </span>;
const defaultTimelineData = [{
    id: "1",
    title: "IT & Reporting",
    company: "Sales Connect Ltd.",
    date: "2025 - Present",
    description: "Lead development team, implemented IT Support"
}, {
    id: "2",
    title: "IT & Reporting",
    company: "Market Express Ltd.",
    date: "2022 - 2024",
    description: "Developed client projects using modern web technologies and collaborated with cross-functional teams."
}, {
    id: "3",
    title: "CMS Platform",
    company: "Government Project",
    date: "2021",
    description: "Built complete CMS Content solution with 99.9% uptime handling 10k+ daily transactions."
}, {
    id: "4",
    title: "Bussines Stadius",
    company: "Kathalia Pilot Model School",
    date: "2016 - 2021",
    description: "Secondary School Certificate of Bussines Stadius, Magna Cum Laude with 3.18 GPA, focus on Finance"
}];
export default function About({
    data = defaultTimelineData
}) {
    return (
        <div className="container mx-auto py-20 px-0 lg:px-8">
            <div className="text-center pb-8">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-11 tracking-tight">
                    Professional Timeline
                </h1>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center gap-5">
                <div>
                    <Card className="p-4 sm:p-6 lg:p-8">
                        <div className="space-y-8 sm:space-y-10">
                            {data.map((item, index) => (
                                <div key={item.id} className="relative group transition-all duration-300 hover:translate-x-1">
                                    {/* Timeline Line - hidden on very small screens or adjusted for mobile */}
                                    {index !== data.length - 1 && (
                                        <div className="absolute left-3 top-8 h-full w-0.5 bg-gradient-to-b from-orange-500 via-gray-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                                    )}

                                    <div className="flex gap-4 sm:gap-6">
                                        {/* Dot Indicator */}
                                        <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <div className="h-2.5 w-2.5 rounded-full bg-white shadow-sm" />
                                        </div>

                                        {/* Content Area */}
                                        <div className="flex-1 space-y-3">
                                            <div className="space-y-1">
                                                <h3 className="font-bold text-base sm:text-lg text-gray-950 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                                    <p className="text-orange-600 dark:text-orange-400 font-semibold text-sm sm:text-base leading-none">
                                                        {item.company}
                                                    </p>
                                                    <div className="w-fit">
                                                        <Badge className="text-[10px] sm:text-xs py-0 px-2">{item.date}</Badge>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed group-hover:bg-gray-50 dark:group-hover:bg-gray-800/40 rounded-xl p-2 sm:p-3 -m-2 sm:-m-3 transition-all duration-300 border border-transparent group-hover:border-gray-100 dark:group-hover:border-gray-700/50">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
                <div className="1/2">
                    <Image src="/images.png" width={560} height={400} className="object-cover hover:scale-105 transition-all duration-300 rounded-md" alt="profile" />
                </div>
            </div>
        </div>
    );
}