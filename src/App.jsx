import React from 'react'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'
import Project from './Components/Project'

function App() {
  return (
    <div className='flex'>
      <div><Sidebar/></div>
      <div><Project/></div>
     <div className='p-5'> <Home/></div>
    </div>
  )
}

export default App