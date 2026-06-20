'use client';

import React from 'react';

// মডার্ন আইকন কম্পোনেন্টস
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
);

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id='contact' className="relative min-h-screen bg-white dark:bg-[#020617] py-24 px-6 overflow-hidden transition-colors duration-300">

            {/* Background Glow Effects - আপনার থিমের সাথে মিল রেখে */}
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-950/30 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-950/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-5xl font-medium text-slate-900 dark:text-white mb-4 tracking-tight'>
                        Connect <span className='text-indigo-500'>with</span> Me
                    </h2>
                    <div className="h-1 w-16 bg-indigo-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-full max-w-2xl group">
                        {/* Glassmorphism Card */}
                        <div className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[32px] p-8 sm:p-12 shadow-2xl transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700">

                            <form onSubmit={handleSubmit} className="space-y-7">

                                {/* Name Input */}
                                <div className="space-y-2.5">
                                    <label htmlFor="fullName" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                        Full Name
                                    </label>
                                    <div className="relative group/input">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                                            <UserIcon />
                                        </div>
                                        <input
                                            id="fullName"
                                            type="text"
                                            placeholder="John Doe"
                                            className="flex h-12 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 px-4 pl-12 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2.5">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                        Email Address
                                    </label>
                                    <div className="relative group/input">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                                            <MailIcon />
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            className="flex h-12 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 px-4 pl-12 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Project Title Input */}
                                <div className="space-y-2.5">
                                    <label htmlFor="title" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                        Project Title
                                    </label>
                                    <div className="relative group/input">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                                            <EditIcon />
                                        </div>
                                        <input
                                            id="title"
                                            type="text"
                                            placeholder="Web Development"
                                            className="flex h-12 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 px-4 pl-12 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Project Details Textarea */}
                                <div className="space-y-2.5">
                                    <label htmlFor="details" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                                        Project Details
                                    </label>
                                    <textarea
                                        id="details"
                                        rows="4"
                                        placeholder="Tell me more about your project..."
                                        className="flex w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-5 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button - Fancy Style */}
                                <button
                                    type="submit"
                                    className="relative w-full group/btn overflow-hidden h-14 flex items-center justify-center gap-3 rounded-2xl bg-blue-400/10 dark:bg-blue-500/10 backdrop-blur-xl border border-white/20 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-sm transition-all hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] cursor-pointer active:scale-[0.98]"
                                >
                                    <span className="relative z-10 tracking-wide">Send Message</span>

                                    {/* Send Icon with Hover Animation */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5 ease-in-out"
                                    >
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>

                                    {/* Elegant Glass Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-blue-400/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />

                                    {/* Subtle Inner Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;