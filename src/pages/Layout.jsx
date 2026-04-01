import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../componets/Sidebar'

const Layout = () => {
  return (
    <div className='flex min-h-screen bg-gray-50'>
        <Sidebar />
        <main className='flex-1 overflow-y-auto pt-14 md:pt-0'>
            <div className='p-6 md:p-8 max-w-6xl mx-auto'>
                <Outlet />
            </div>
        </main>
    </div>
  )
}

export default Layout