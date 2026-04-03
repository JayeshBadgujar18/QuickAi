import React from 'react'
import { Sparkles,Edit,Hash, Image } from 'lucide-react'
import { useState } from 'react'

const GenerateImages = () => {

      const imageStyle = ['Realistic','Cartoon','Anime','3D','Oil Painting','Watercolor','Sketch','Pixel Art','Cyberpunk','Fantasy']
  
      const [selectedStyle,setSelectedStyle] = useState('Realistic')
      const [input,setInput] = useState('')
      const [publish,setpublish]=useState(false);
  
      const onSubmitHandler = async (e)=>{
      e.preventDefault()  
    }
  return (

        <div className='h-full overflow-y-scroll p-6 flex flex-col lg:flex-row items-stretch gap-6 text-slate-700'>
   {/* left col */}
   <form onSubmit={onSubmitHandler} className='w-full lg:w-96 flex-shrink-0 p-5 bg-white rounded-lg border border-gray-200 shadow-sm'>

    <div className='flex items-center gap-3'>

      <Sparkles className='w-6 h-6 text-[#00AD25]'/>
      <h1 className='text-xl font-semibold'>AI Image Generator</h1>
    </div>
    <p className='font-medium text-sm mt-6'>
     Describe Your Image
    </p>
    <textarea onChange={(e)=>setInput(e.target.value)} value={input} rows={4} placeholder='Describe What you want to see in the Image ..' className='w-full border border-gray-300 rounded-md px-3 p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary outline-none text-sm' required />
    
    <p className='mt-4 font-medium text-sm'>Image Style</p>

    <div className='flex flex-col gap-3 mt-3'>
      {imageStyle.map((item,index)=>(
          <div key={index} onClick={()=>setSelectedStyle(item)} className={`text-sm px-4 py-3 rounded-lg cursor-pointer transition-all border ${selectedStyle === item ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-sm'}`}>
            {item}
          </div>
      ))}
    </div>

    <div className='my-6 flex items-center gap-2'>

      <label className='relative cursor-pointer'>

        <input type="checkbox" onChange={(e)=>setpublish(e.target.checked)} className='sr-only peer'/>
        <div className='w-9 h-5 border bg-slate-300 rounded-full peer-checked:bg-green-500 transition '></div>
        <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transtition peer-checked:translate-x-4'>

        </span>

      </label>

      <p className='text-sm'>
        Make This Image Public
      </p>
      


    </div>

    
    <button className=' w-full flex justify-center  items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 rounded-lg cursor-pointer'>
      <Image className='w-5 h-5 '/>
      Generate Image
    </button>


   </form>

   {/* right col */}

   <div className='w-full flex-1 p-5 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[500px]'>
     <div className='flex items-center gap-3'>
      <Image className='w-5 h-5 text-[#00AD25]'/>
      <h1 className='text-xl font-semibold'> Generated Image</h1>
     </div>

     <div className='flex-1 flex justify-center items-center'>

      <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
        <Image className='w-9 h-9'/>
        <p>Enter a Topic and <span className='text-primary'>"Generate Image"</span> To get Started</p>

      </div>
     </div>


   </div>


    </div>
    
  )
}

export default GenerateImages