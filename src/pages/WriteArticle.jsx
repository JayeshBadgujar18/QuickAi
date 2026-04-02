import { Sparkles } from 'lucide-react'
import React from 'react'

const WriteArticle = () => {
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
   {/* left col */}
   <form className='w-full p-4 max-w-lg bg-white rounded-lg border border-gray-200 shadow-sm'>

    <div className='flex items-center gap-3'>

      <Sparkles className='w-6 h-6 text-[#4A7AFF]'/>
      <h1 className='text-xl font-semibold'> Article Configuration</h1>
    </div>

   </form>

   {/* right col */}

   <div>


   </div>


    </div>
  )
}

export default WriteArticle