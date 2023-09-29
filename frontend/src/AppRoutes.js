import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'

export default function AppRoutes() {
  return (

    <Routes>
        <Route path="/" element={<HomePage />}  />
    </Routes>
     
  )
}
