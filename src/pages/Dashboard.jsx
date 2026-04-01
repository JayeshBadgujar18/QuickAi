import React from 'react'
import { useUser } from '@clerk/react'
import { useNavigate } from 'react-router-dom'
import { dummyCreationData } from '../assets/assets'
import { SquarePen, Hash, Image, Eraser, Scissors, FileText, Crown, Layers, Clock, ArrowRight } from 'lucide-react'

const typeConfig = {
    'article': { label: 'Article', Icon: SquarePen, color: 'from-blue-500 to-cyan-500' },
    'blog-title': { label: 'Blog Title', Icon: Hash, color: 'from-purple-500 to-pink-500' },
    'image': { label: 'Image', Icon: Image, color: 'from-green-500 to-emerald-500' },
    'background-removal': { label: 'BG Removal', Icon: Eraser, color: 'from-orange-500 to-red-500' },
    'object-removal': { label: 'Object Removal', Icon: Scissors, color: 'from-indigo-500 to-blue-500' },
    'resume-review': { label: 'Resume Review', Icon: FileText, color: 'from-teal-500 to-cyan-500' },
}

const Dashboard = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const creations = dummyCreationData;
    const totalCreations = creations.length;
    const articles = creations.filter(c => c.type === 'article').length;
    const blogTitles = creations.filter(c => c.type === 'blog-title').length;
    const images = creations.filter(c => c.type === 'image').length;

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
        });
    };

    return (
        <div>
            {/* Welcome Header */}
            <div className='mb-8'>
                <h1 className='text-2xl sm:text-3xl font-semibold text-gray-800'>
                    Welcome back, {user?.firstName || 'User'} 👋
                </h1>
                <p className='text-gray-500 mt-1'>Here&apos;s an overview of your AI creations.</p>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'>
                <div className='bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition'>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm font-medium text-gray-500'>Total Creations</span>
                        <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-indigo-400 flex items-center justify-center'>
                            <Layers className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <p className='text-3xl font-bold text-gray-800'>{totalCreations}</p>
                    <p className='text-xs text-gray-400 mt-1'>All time</p>
                </div>

                <div className='bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition'>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm font-medium text-gray-500'>Articles</span>
                        <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center'>
                            <SquarePen className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <p className='text-3xl font-bold text-gray-800'>{articles}</p>
                    <p className='text-xs text-gray-400 mt-1'>Written by AI</p>
                </div>

                <div className='bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition'>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm font-medium text-gray-500'>Blog Titles</span>
                        <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center'>
                            <Hash className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <p className='text-3xl font-bold text-gray-800'>{blogTitles}</p>
                    <p className='text-xs text-gray-400 mt-1'>Generated titles</p>
                </div>

                <div className='bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition'>
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm font-medium text-gray-500'>Images</span>
                        <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center'>
                            <Image className='w-5 h-5 text-white' />
                        </div>
                    </div>
                    <p className='text-3xl font-bold text-gray-800'>{images}</p>
                    <p className='text-xs text-gray-400 mt-1'>AI generated</p>
                </div>
            </div>

            {/* Plan Status & Recent Creations */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

                {/* Plan Status */}
                <div className='bg-white rounded-xl border border-gray-100 shadow-sm p-6'>
                    <div className='flex items-center gap-3 mb-5'>
                        <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center'>
                            <Crown className='w-5 h-5 text-white' />
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold text-gray-800'>Plan Status</h2>
                            <p className='text-xs text-gray-400'>Current subscription</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                            <span className='text-sm text-gray-500'>Current Plan</span>
                            <span className='text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full'>Free</span>
                        </div>

                        <div>
                            <div className='flex items-center justify-between mb-1.5'>
                                <span className='text-sm text-gray-500'>Creations Used</span>
                                <span className='text-sm font-medium text-gray-700'>{totalCreations}/10</span>
                            </div>
                            <div className='w-full bg-gray-100 rounded-full h-2'>
                                <div
                                    className='bg-gradient-to-r from-primary to-indigo-400 h-2 rounded-full transition-all duration-500'
                                    style={{ width: `${Math.min((totalCreations / 10) * 100, 100)}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <span className='text-sm text-gray-500'>Renewal</span>
                            <span className='text-sm text-gray-700'>Monthly</span>
                        </div>

                        <button
                            onClick={() => navigate('/')}
                            className='w-full mt-2 bg-gradient-to-r from-primary to-indigo-500 text-white py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition cursor-pointer flex items-center justify-center gap-2'
                        >
                            Upgrade Plan <ArrowRight className='w-4 h-4' />
                        </button>
                    </div>
                </div>

                {/* Recent Creations */}
                <div className='lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6'>
                    <div className='flex items-center justify-between mb-5'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-lg bg-gradient-to-r from-slate-600 to-gray-800 flex items-center justify-center'>
                                <Clock className='w-5 h-5 text-white' />
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold text-gray-800'>Recent Creations</h2>
                                <p className='text-xs text-gray-400'>Your latest AI-generated content</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        {creations.length === 0 ? (
                            <div className='text-center py-10 text-gray-400'>
                                <Layers className='w-12 h-12 mx-auto mb-3 opacity-40' />
                                <p>No creations yet. Start creating!</p>
                            </div>
                        ) : (
                            creations.map((creation) => {
                                const config = typeConfig[creation.type] || { label: creation.type, Icon: Layers, color: 'from-gray-400 to-gray-500' };
                                const TypeIcon = config.Icon;
                                return (
                                    <div key={creation.id} className='flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition border border-transparent hover:border-gray-100 cursor-pointer'>
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                            <TypeIcon className='w-5 h-5 text-white' />
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <div className='flex items-center justify-between gap-2'>
                                                <p className='text-sm font-medium text-gray-800 truncate'>{creation.prompt}</p>
                                                <span className='text-xs text-gray-400 flex-shrink-0'>{formatDate(creation.created_at)}</span>
                                            </div>
                                            <p className='text-xs text-gray-500 mt-1 line-clamp-2'>
                                                {creation.content?.substring(0, 120)}...
                                            </p>
                                            <div className='flex items-center gap-2 mt-2'>
                                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-gradient-to-r ${config.color} text-white`}>
                                                    {config.label}
                                                </span>
                                                {creation.publish && (
                                                    <span className='text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700'>Published</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard