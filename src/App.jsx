import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ProjectContent from './Components/ProjectContent'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/project-content' element={<ProjectContent/>} />
   </Routes>
  )
}

export default App

