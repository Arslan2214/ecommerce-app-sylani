import React from 'react'
import { Route, Routes } from 'react-router-dom'

function index() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </>
  )
}

export default index