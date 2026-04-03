import React from 'react'
import { useState } from 'react'
import { Sparkles,Edit,Hash, Image, Eraser } from 'lucide-react'


const Removebackground = () => {
     const [input,setInput] = useState('')
  
      const onSubmitHandler = async (e)=>{
      e.preventDefault()  
    }


  return (
       <div className='h-full overflow-y-scroll p-6 flex flex-col lg:flex-row items-stretch gap-6 text-slate-700'>
   {/* left col */}
   <form onSubmit={onSubmitHandler} className='w-full lg:w-96 flex-shrink-0 p-5 bg-white rounded-lg border border-gray-200 shadow-sm'>

    <div className='flex items-center gap-3'>
    
      <Sparkles className='w-6 h-6 text-[#FF4938]'/>
      <h1 className='text-xl font-semibold'>Background Removal</h1>
    </div>
    <p className='font-medium text-sm mt-6'>
     Upload Image
    </p>
    <input onChange={(e)=>setInput(e.target.files[0])}  type="file" accept='image/*' className='w-full border border-gray-300 rounded-md px-3 p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary outline-none text-sm text-gray-600' required />

    <p className='text-xs text-gray-500 mt-1 font-light'>Supports JPG ,PNG and other image formats </p>

    <button className=' w-full flex justify-center  items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 rounded-lg cursor-pointer'>
      <Eraser className='w-5 h-5 '/>
     Remove Background
    </button>


   </form>

   {/* right col */}

   <div className='w-full flex-1 p-5 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[500px]'>
     <div className='flex items-center gap-3'>
      <Eraser className='w-5 h-5 text-[#FF4938]'/>
      <h1 className='text-xl font-semibold'>Processed Image</h1>
     </div>

     <div className='flex-1 flex justify-center items-center'>

      <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
        <Eraser className='w-9 h-9'/>
        <p>Upload Image and click  <span className='text-primary'>"Remove Background"</span> To get Started</p>

      </div>
     </div>


   </div>


    </div>
  )
}

export default Removebackground