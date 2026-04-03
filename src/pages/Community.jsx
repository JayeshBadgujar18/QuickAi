import React, { useEffect } from 'react'
import { useState } from 'react'
import { useUser } from '@clerk/react'
import {dummyPublishedCreationData} from '../assets/assets'



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
    <div className=''>
      Creations
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>

        {creations.map((creation,index)=>(
          <div key={index} className='relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3'>
            <img src={creation.content} alt="" className='w-full h-full object-cover rounded-lg' />
            <p>{creation.prompt}</p>
          </div>
        ))}


      </div>


    </div>
  )
}

export default Community