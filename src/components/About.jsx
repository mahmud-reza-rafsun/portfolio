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
}) => <span className={`inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300 ${className}`}>
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
        <div className="container mx-auto py-20">
            <div className="text-center pb-8">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-11 tracking-tight">
                    Professional Timeline
                </h1>
            </div>
            <div className="flex justify-between items-center gap-5 ">
                <div className="">
                    <div>
                        <Card>
                            <div className="space-y-10">
                                {data.map((item, index) => <div key={item.id} className="relative group transition-all duration-300 hover:translate-x-1">
                                    {index !== data.length - 1 && <div className="absolute left-3 top-8 h-full w-0.5 bg-gradient-to-b from-black via-gray-400 to-white opacity-60 group-hover:opacity-100 transition-opacity duration-300" />}
                                    <div className="flex gap-6">
                                        <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 mt-1 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <div className="h-2.5 w-2.5 rounded-full bg-gray-100 dark:bg-white shadow-2xl dark:shadow-sm" />
                                        </div>
                                        <div className="flex-1 space-y-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                            <div className="space-y-1">
                                                <h3 className="font-semibold text-lg text-gray-950 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sky-600 dark:text-sky-400 font-medium">{item.company}</p>
                                                    <Badge>{item.date}</Badge>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:bg-gray-50 dark:group-hover:bg-gray-800/30 rounded-lg p-3 -m-3 transition-all duration-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="1/2">
                    <Image src="/images.png" width={560} height={400} className="object-cover hover:scale-105 transition-all duration-300 rounded-md" alt="profile" />
                </div>
            </div>
        </div>
    );
}