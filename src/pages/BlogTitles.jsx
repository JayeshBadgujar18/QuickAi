import React from 'react'
import { Sparkles, Edit, Hash } from 'lucide-react'
import { useState } from 'react'


const BlogTitles = () => {
    const blogCategories = ['Genral','Technology','Health','Business','Education','Entertainment','Travel','Food','Fashion','Sports']

    const [selectedCategory,setSelectedCategory] = useState('Genral')
    const [input,setInput] = useState('')

    const onSubmitHandler = async (e)=>{
    e.preventDefault()  
  }
  return (


    <div className='h-full overflow-y-scroll p-6 flex flex-col lg:flex-row items-stretch gap-6 text-slate-700'>
   {/* left col */}
   <form onSubmit={onSubmitHandler} className='w-full lg:w-96 flex-shrink-0 p-5 bg-white rounded-lg border border-gray-200 shadow-sm'>

    <div className='flex items-center gap-3'>

      <Sparkles className='w-6 h-6 text-[#8E37EB]'/>
      <h1 className='text-xl font-semibold'>Blog Title Generator</h1>
    </div>
    <p className='font-medium text-sm mt-6'>
     Keyword
    </p>
    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='the future of artificial intelligience' className='w-full border border-gray-300 rounded-md px-3 p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-primary outline-none text-sm' required />
    
    <p className='mt-4 font-medium text-sm'>Category</p>

    <div className='flex flex-col gap-3 mt-3'>
      {blogCategories.map((item,index)=>(
          <div key={index} onClick={()=>setSelectedCategory(item)} className={`text-sm px-4 py-3 rounded-lg cursor-pointer transition-all border ${selectedCategory === item ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-sm'}`}>
            {item}
          </div>
      ))}
    </div>
    <br />
    <button className=' w-full flex justify-center  items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 rounded-lg cursor-pointer'>
      <Hash className='w-5 h-5 '/>
      Generate Title
    </button>


   </form>

   {/* right col */}

   <div className='w-full flex-1 p-5 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[500px]'>
     <div className='flex items-center gap-3'>
      <Hash className='w-5 h-5 text-[#8E37EB]'/>
      <h1 className='text-xl font-semibold'> Generated Titles</h1>
     </div>

     <div className='flex-1 flex justify-center items-center'>

      <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
        <Hash className='w-9 h-9'/>
        <p>Enter a Topic and <span className='text-primary'>"Generate Titles"</span> To get Started</p>

      </div>
     </div>


   </div>


    </div>
    
  )
}

export default BlogTitles