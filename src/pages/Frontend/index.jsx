import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Categories from './pages/Categories'
import FAQ from './pages/FAQ'


function index() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about/' element={<About />} />
            <Route path='/contect/' element={<Contact/>} />
            <Route path='/categories/' element={<Categories/>} />
            <Route path='/faq' element={<FAQ/>} />
            <Route path='*' element={<center>Page Not Found | 404</center>} />
        </Routes>
    </>
  )
}

export default index