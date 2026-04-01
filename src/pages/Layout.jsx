import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../componets/Sidebar'
import { useUser, useClerk } from '@clerk/react'

const Layout = () => {
  const { user, isLoaded } = useUser();
  const { openSignIn } = useClerk();

  useEffect(() => {
    if (isLoaded && !user) {
      openSignIn();
    }
  }, [isLoaded, user, openSignIn]);

  if (!isLoaded) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        <div className='w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 gap-4'>
        <p className='text-gray-500 text-lg'>Please sign in to access AI tools.</p>
      </div>
    );
  }

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