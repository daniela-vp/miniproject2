import Navbar from './homepage/Navbar'
import Sidebar from './homepage/Sidebar'
import Footer from './homepage/Footer'
import HomePage from './components/HomePage'
import './App.css'
import { Routes, Route ,NavLink } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import NotFound from './components/NotFoundPage'
import ItemDetailsPage from './components/ItemDetailsPage'

function App() {

  return (  
    <>
     <nav>
        <NavLink to="/">Home </NavLink>
        <NavLink to="/about">About</NavLink>
        
      
      </nav>

     <Routes>
        {/* <Route path="/" element={<DashboardPage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/items/:itemId" element= {<ItemDetailsPage/>}/>
        
        <Route path="/*" element={<NotFound />} />
        
      </Routes>

     <Sidebar />


     <Footer />

    </>
    
   
  )
}

export default App;

