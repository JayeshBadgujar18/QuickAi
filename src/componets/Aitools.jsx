import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiToolsData} from '../assets/assets'

const Aitools = () => {
    const navigate=useNavigate();
  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24'> 

        <div className='text-center mb-12'>

            <h2 className='text-slate-700 text-[42px] font-semibold '>
                Powerful AI Tools
            </h2>
            <p className=' max-w-2xl text-gray-500  mx-auto'>
                Explore our suite of AI-powered tools designed to streamline your workflow and enhance your creativity.
            </p>
        </div>

        <div className='flex flex-wrap mt-10 justify-center'> 

            {AiToolsData.map((item,index)=>{
                return(
                    <div key={index} >
                      
                    </div>
                )
            })  }

        </div>


    </div>
  )
}

export default Aitools