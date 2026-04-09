import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import ReviewResume from './pages/ReviewResume'
import RemoveObject from './pages/RemoveObject'
import Removebackground from './pages/Removebackground'
import GenerateImages from './pages/GenerateImages'
import Community from './pages/Community'
import { useAuth } from '@clerk/react'
import { useEffect } from 'react'




const App = () => {

  const {getToken}=useAuth();
  useEffect(() => {
    getToken().then((token)=>{
      console.log(token);
    })
   
  }, []);



  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/ai' element={<Layout/>}>
        <Route index element={<Dashboard/>} />
        <Route path='WriteArticle' element={<WriteArticle/>} />
        <Route path='BlogTitles' element={<BlogTitles/>} />
        <Route path='ReviewResume' element={<ReviewResume/>} />
        <Route path='RemoveObject' element={<RemoveObject/>} />
        <Route path='Removebackground' element={<Removebackground/>} />
        <Route path='GenerateImages' element={<GenerateImages/>} />
        <Route path='Community' element={<Community/>} />

        

        </Route>
          
            
       
      </Routes>
    </div>
  )
}

export default App