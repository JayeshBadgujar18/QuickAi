import React, { useEffect } from 'react'
import { useState } from 'react'
import { useUser } from '@clerk/react'
import {dummyPublishedCreationData} from '../assets/assets'
import { Heart } from 'lucide-react'



const Community = () => {
  const [creations  ,setcreations]=useState([])
  const {user}=useUser();

  const fetchCreations=async()=>{
    setcreations(dummyPublishedCreationData)
    
  }
  useEffect(()=>{
    if(user){
      fetchCreations()
    }
  },[user])

  return (
    <div className='flex flex-col h-full'>
      <div className='mb-6 px-1'>
        <h1 className='text-3xl font-bold text-slate-800'>Community Creations</h1>
        <p className='text-slate-500 mt-2 text-sm'>Explore the incredible AI-generated content shared by our community.</p>
      </div>
      <div className='bg-white flex-1 w-full rounded-xl overflow-y-scroll'>

        {creations.map((creation,index)=>(
          <div key={index} className='relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3'>
            <img src={creation.content} alt="" className='w-full h-full object-cover rounded-lg' />
            <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg'>
              <p className='text-sm hidden group-hover:block'>{creation.prompt}</p>
              <div className='flex gap-1 items-center'>
                <p>
                  {creation.likes.length}
                  <Heart className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${creation.likes.includes(user?.id) ? 'fill-red-500 text-red-600' : 'text-white'}`}/>
                </p>
              </div>
            </div>
          </div>
        ))}


      </div>


    </div>
  )
}

export default Community