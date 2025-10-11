'use client';

import React, { useState } from 'react';
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
</svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
</svg>;
const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="12" cy="16" r="1"></circle>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>;
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-4xl font-bold text-gray-800 dark:text-white'>Contact  <span className='text-orange-500'>with</span> Me </h2>
            </div>
            <div className="flex items-center justify-center p-4 gap-x-20 py-20">
                <div className="w-full max-w-xl">

                    { }
                    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm">
                        { }
                        <form onSubmit={handleSubmit} className="space-y-6">
                            { }
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Full Name
                                </label>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                        <UserIcon />
                                    </div>
                                    <input id="fullName" type="text" placeholder="Enter your full name" className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 pl-10 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none" />
                                </div>
                            </div>

                            { }
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Email
                                </label>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                        <MailIcon />
                                    </div>
                                    <input id="email" type="email" placeholder="name@example.com" className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 pl-10 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none" />
                                </div>
                            </div>

                            { }
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Title
                                </label>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                        <LockIcon />
                                    </div>
                                    <input id="text" type="text" placeholder="Enter your Title" className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 pl-10 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none " />
                                </div>
                            </div>

                            { }

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                    Project Details
                                </label>
                                <div className="relative mt-2">
                                    <textarea name="" id="text" placeholder='Enter your Details' className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black py-2 pl-5 pr-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none'></textarea>
                                </div>
                            </div>

                            { }
                            <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 hover:bg-gray-900/90 dark:hover:bg-gray-50/90 h-10 px-4 py-2 w-full cursor-pointer">
                                Send
                            </button>
                        </form>

                    </div>
                </div>
                {/* map section */}
                <div className="w-[600px] h-[520px] rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.97303520625!2d90.3372882549703!3d23.780818635553448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1760177462205!5m2!1sbn!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
export default Contact;