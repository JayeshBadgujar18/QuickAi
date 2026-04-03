import React, { useState } from 'react'
import { Sparkles,Edit,Hash, Image, Eraser, Scissors } from 'lucide-react'


const RemoveObject = () => {

    const [input,setInput] = useState('')
    const [object,setobject]=useState('')
    
        const onSubmitHandler = async (e)=>{
        e.preventDefault()  
      }
  return (
           <div className='h-full overflow-y-scroll p-6 flex flex-col lg:flex-row items-stretch gap-6 text-slate-700'>
   {/* left col */}
   <form onSubmit={onSubmitHandler} className='w-full lg:w-96 flex-shrink-0 p-5 bg-white rounded-lg border border-gray-200 shadow-sm'>

    <div className='flex items-center gap-3'>
    
      <Sparkles className='w-6 h-6 text-[#4A7AFF]'/>
      <h1 className='text-xl font-semibold'>Object Removal</h1>
    </div>
    <p className='font-medium text-sm mt-6'>
     Upload Image
    </p>
    <input onChange={(e)=>setInput(e.target.files[0])}  type="file" accept='image/*' className='w-full border border-gray-300 rounded-md px-3 p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary outline-none text-sm text-gray-600' required />
    
    <p className='font-medium text-sm mt-6'>
     Describe What you want to remove
    </p>
    <textarea onChange={(e)=>setobject(e.target.value)} value={object} rows={4} placeholder='Describe What you want to remove from the Image ..' className='w-full border border-gray-300 rounded-md px-3 p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary outline-none text-sm' required />
      
   

    <button className=' w-full flex justify-center  items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 rounded-lg cursor-pointer'>
      <Scissors className='w-5 h-5 '/>
     Remove Object
    </button>


   </form>

   {/* right col */}

   <div className='w-full flex-1 p-5 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[500px]'>
     <div className='flex items-center gap-3'>
      <Scissors className='w-5 h-5 text-[#4A7AFF]'/>
      <h1 className='text-xl font-semibold'>Processed Image</h1>
     </div>

     <div className='flex-1 flex justify-center items-center'>

      <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
        <Scissors className='w-9 h-9'/>
        <p>Describe the Object you want to remove and click <span className='text-primary'>"Remove Object"</span> To get Started</p>

      </div>
     </div>


   </div>


    </div>
  )
}

export default RemoveObject