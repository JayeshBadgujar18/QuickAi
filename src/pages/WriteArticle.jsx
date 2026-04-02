import { Sparkles, Edit } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const WriteArticle = () => {

  const articleLength = [
    {length:800 ,text :'Short (500-800 words)'},
    {length:1200 ,text :'Medium (800-1200 words)'},
    {length:1600 ,text :'Long (1200-1600 words)'},
  ]

  const [selectedLength,setSelectedLength] = useState(articleLength[0].length)
  const [input,setInput] = useState('')

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    
    
  }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
   {/* left col */}
   <form onSubmit={onSubmitHandler} className='w-full p-4 max-w-lg bg-white rounded-lg border border-gray-200 shadow-sm'>

    <div className='flex items-center gap-3'>

      <Sparkles className='w-6 h-6 text-[#4A7AFF]'/>
      <h1 className='text-xl font-semibold'> Article Configuration</h1>
    </div>
    <p className='font-medium text-sm mt-6'>
      Article Topic
    </p>
    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='the future of artificial intelligience' className='w-full border border-gray-300 rounded-md px-3 p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary outline-none text-sm' required />
    
    <p className='mt-4 font-medium text-sm'>Article Length</p>

    <div className='flex flex-wrap gap-3 mt-3 sm:max-w-9/11'>
      {articleLength.map((item,index)=>(
       
          <span key={index} onClick={()=>setSelectedLength(item.length)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedLength === item.length ? 'bg-primary text-white' : ''}`}>{item.text}</span>
        
      ))}
    </div>
    <br />
    <button className=' w-full flex justify-center  items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 rounded-lg cursor-pointer'>
      <Edit className='w-5 h-5 '/>
      Generate Article
    </button>


   </form>

   {/* right col */}

   <div>


   </div>


    </div>
  )
}

export default WriteArticle