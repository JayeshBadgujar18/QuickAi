import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiToolsData} from '../assets/assets'
import { useUser } from '@clerk/react'

const Aitools = () => {
    const navigate=useNavigate();
    const {user}=useUser();
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

            {AiToolsData.map((tool,index)=>{
                return(
                    <div key={index} className='max-w-xs sm:w-[250px] bg-[#FDFDFE] rounded-lg shadow-lg border border-gray-100 p-8 m-4 cursor-pointer hover:-translate-y-1 transition-all duration-300 cursor pointer'
                     onClick={()=> user && navigate(tool.path)}>
                        <tool.Icon className='text-white rounded-xl w-12 h-12 p-3' style={{background : `linear-gradient(to right, ${tool.bg.from}, ${tool.bg.to})`}}/>
                        <h3 className='text-lg font-semibold text-gray-800 mb-2 mt-2'>{tool.title}</h3>
                        <p className='text-gray-600 text-sm'>{tool.description}</p>



                      
                    </div>
                )
            })  }

        </div>


    </div>
  )
}

export default Aitools