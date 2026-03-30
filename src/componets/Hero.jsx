import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const Hero = () => {
    const navigate=useNavigate();
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col items-center w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
        
        <div className='mb-2'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-medium text-center text-black'><span className='text-primary'>AI-Powered</span><br />Content Creation</h1>
            <p className='text-lg sm:text-xl text-center text-gray-600 mt-6 max-w-2xl mx-auto'>Generate high-quality content with the power of AI. <br />Write articles, Generate Images and Enhance your Workflow.</p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs mt-8'>
            <button onClick={()=>navigate('/ai')} className='bg-primary text-white px-10 py-3.5 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Start Creating Now</button>
            <button className='bg-white px-10 py-3.5 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch Demo</button>
        </div>

        <div className='flex item-center gap-4 mt-8 mx-auto text-gray-600'>
            <img src={assets.user_group} alt="user_group" className='h-8' /> Trusted By 10K+ people
        </div>
    </div>
  )
}

export default Hero