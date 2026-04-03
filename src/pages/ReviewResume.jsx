import React from 'react'
import { Sparkles,Edit,Hash, Image, Eraser, FileText } from 'lucide-react'
import { useState } from 'react'

const ReviewResume = () => {

     const [input,setInput] = useState('')
    
        const onSubmitHandler = async (e)=>{
        e.preventDefault()  
      }

  return (
          <div className='h-full overflow-y-scroll p-6 flex flex-col lg:flex-row items-stretch gap-6 text-slate-700'>
   {/* left col */}
   <form onSubmit={onSubmitHandler} className='w-full lg:w-96 flex-shrink-0 p-5 bg-white rounded-lg border border-gray-200 shadow-sm'>

    <div className='flex items-center gap-3'>
    
      <Sparkles className='w-6 h-6 text-[#00DA83]'/>
      <h1 className='text-xl font-semibold'>Resume Review</h1>
    </div>
    <p className='font-medium text-sm mt-6'>
     Upload Resume
    </p>
    <input onChange={(e)=>setInput(e.target.files[0])}  type="file" accept='application/pdf' className='w-full border border-gray-300 rounded-md px-3 p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary outline-none text-sm text-gray-600' required />

    <p className='text-xs text-gray-500 mt-1 font-light'>Supports PDF formats </p>

    <button className=' w-full flex justify-center  items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 rounded-lg cursor-pointer'>
      <FileText className='w-5 h-5 '/>
      Review Resume
    </button>


   </form>

   {/* right col */}

   <div className='w-full flex-1 p-5 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[500px] max-h-[600px] '>
     <div className='flex items-center gap-3'>
      <FileText className='w-5 h-5 text-[#00DA83]'/>
      <h1 className='text-xl font-semibold'>Analysis Result</h1>
     </div>

     <div className='flex-1 flex justify-center items-center'>

      <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
        <FileText className='w-9 h-9'/>
        <p>Upload Resume and click  <span className='text-primary'>"Review Resume"</span> To get Started</p>

      </div>
     </div>


   </div>


    </div>
  )
}

export default ReviewResume