
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Layout from './component/Layout/layout';






 

function App() {


 const router =  createBrowserRouter([
    {path : "" , element : <Layout/> , children : [
    {path : "/" , element : <Home/>},
    {path : "about" , element : <About/>},
    {path : "portfolio" , element : <Portfolio/>},
    {path : "contact" , element : <Contact/>},
    {path : "*" , element : <div className='bg-danger text-white text-center fw-bold vh-100 pt-5'><h1>Error 404 , This page is Not Found .</h1></div>},
      
    ]}, 
  
  ])




  return (<>

    <RouterProvider router={router}/>

    {/* <Navbar/> */}

      
     
     
     
    </>
  )
}

export default App
