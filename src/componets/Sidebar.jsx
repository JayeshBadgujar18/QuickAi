import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { SquarePen, Hash, Image, Eraser, Scissors, FileText, LayoutDashboard, Users, Menu, X, Home } from 'lucide-react'
import { UserButton } from '@clerk/react'

const sidebarLinks = [
    { name: 'Dashboard', path: '/ai', Icon: LayoutDashboard },
    { name: 'AI Article Writer', path: '/ai/WriteArticle', Icon: SquarePen },
    { name: 'Blog Titles', path: '/ai/BlogTitles', Icon: Hash },
    { name: 'Generate Images', path: '/ai/GenerateImages', Icon: Image },
    { name: 'Remove Background', path: '/ai/Removebackground', Icon: Eraser },
    { name: 'Remove Object', path: '/ai/RemoveObject', Icon: Scissors },
    { name: 'Resume Reviewer', path: '/ai/ReviewResume', Icon: FileText },
    { name: 'Community', path: '/ai/Community', Icon: Users },
]

const Sidebar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Top Bar */}
            <div className='md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50'>
                <img src={assets.logo} alt="QuickAI" className='w-28 cursor-pointer' onClick={() => navigate('/')} />
                <div className='flex items-center gap-3'>
                    <UserButton />
                    <button onClick={() => setIsOpen(!isOpen)} className='p-1.5 rounded-lg hover:bg-gray-100 transition'>
                        {isOpen ? <X className='w-6 h-6 text-gray-700' /> : <Menu className='w-6 h-6 text-gray-700' />}
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div className='md:hidden fixed inset-0 bg-black/30 z-40' onClick={() => setIsOpen(false)} />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-200
                flex flex-col transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 md:static md:z-auto
            `}>
                {/* Logo */}
                <div className='flex items-center justify-between px-5 py-4 border-b border-gray-100'>
                    <img src={assets.logo} alt="QuickAI" className='w-32 cursor-pointer' onClick={() => navigate('/')} />
                </div>

                {/* Nav Links */}
                <nav className='flex-1 overflow-y-auto px-3 py-4 space-y-1'>
                    {sidebarLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === '/ai'}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                                ${isActive
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <link.Icon className='w-5 h-5 flex-shrink-0' />
                            <span>{link.name}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className='border-t border-gray-100 px-4 py-4'>
                    <div
                        onClick={() => navigate('/')}
                        className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition cursor-pointer'
                    >
                        <Home className='w-5 h-5' />
                        <span>Back to Home</span>
                    </div>
                    <div className='flex items-center gap-3 px-3 mt-2'>
                        <UserButton />
                        <span className='text-sm text-gray-500'>Account</span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
