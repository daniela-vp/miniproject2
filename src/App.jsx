import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './homepage/Navbar'
import Sidebar from './homepage/Sidebar'
import Footer from './homepage/Footer'
import DataList from './components/DataList'
import './App.css'

function App() {

  return (  
    <>
     <Navbar />

     <DataList />


     <Sidebar />


     <Footer />

    </>
   
  )
}

export default App
