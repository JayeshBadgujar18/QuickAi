import React from 'react'
import { PricingTable } from '@clerk/react'


const Plan = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>

        <div className='text-center mb-12'>

            <h2 className='text-slate-700 text-[42px] font-semibold'>
                Choose Your Plan
            </h2>
            <p className='max-w-lg text-gray-500 mx-auto mt-3'>
                You can start for free and scale up as you grow. Find the perfect plan for your content creation needs.
            </p>

        </div>

        <style>{`
            .cl-pricingTable-root {
                display: flex !important;
                flex-direction: row !important;
                flex-wrap: wrap !important;
                justify-content: center !important;
                gap: 1.5rem !important;
            }
        `}</style>

        <div className='flex justify-center'>
            <PricingTable/>
        </div>

    </div>
  )
}

export default Plan