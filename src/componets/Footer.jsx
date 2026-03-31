import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <img src={assets.logo} alt="QuickAI Logo" className="w-36 cursor-pointer" onClick={() => navigate('/')} />
                    <p className="text-sm/7 mt-5">
                        QuickAI is your AI-powered content creation platform. Generate articles, images, and more with the power of artificial intelligence.
                    </p>
                </div>

                {/* AI Tools */}
                <div className="flex flex-col">
                    <h2 className="font-semibold mb-5 text-gray-800">AI Tools</h2>
                    <div className="flex flex-col text-sm space-y-2.5">
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/ai/WriteArticle')}>AI Article Writer</a>
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/ai/BlogTitles')}>Blog Title Generator</a>
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/ai/GenerateImages')}>AI Image Generation</a>
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/ai/Removebackground')}>Background Removal</a>
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/ai/RemoveObject')}>Object Removal</a>
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/ai/ReviewResume')}>Resume Reviewer</a>
                    </div>
                </div>

                {/* Company */}
                <div className="flex flex-col">
                    <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                    <div className="flex flex-col text-sm space-y-2.5">
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/')}>Home</a>
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/ai')}>Dashboard</a>
                        <a className="hover:text-primary transition cursor-pointer" onClick={() => navigate('/ai/Community')}>Community</a>
                        <a className="hover:text-primary transition cursor-pointer" href="#">About Us</a>
                        <a className="hover:text-primary transition cursor-pointer" href="#">Contact Us</a>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="font-semibold text-gray-800 mb-5">Stay Updated</h2>
                    <div className="text-sm space-y-5 max-w-sm">
                        <p>Get the latest AI tools updates, tips, and resources delivered to your inbox.</p>
                        <div className="flex items-center">
                            <input className="rounded-l-md bg-gray-100 outline-none w-full max-w-64 h-11 px-3 border border-gray-200" type="email" placeholder="Enter your email" />
                            <button className="bg-primary cursor-pointer hover:opacity-90 transition px-4 h-11 text-white rounded-r-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-5 border-t mt-10 border-slate-200">
                <p className="text-center">
                    Copyright {new Date().getFullYear()} © QuickAI. All Rights Reserved.
                </p>
                <div className="flex items-center gap-4">
                    <a className="hover:text-primary transition" href="#">Privacy Policy</a>
                    <a className="hover:text-primary transition" href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer