import logo from './logo.svg';
import './App.css';
import {RealTimeData} from "../src/Components/RealTimeData/index.jsx"
import {Crud} from "../src/Components/Crud/index.jsx"
import Login from "../src/Components/auth/Login/Login.jsx"
import Register from "../src/Components/auth/Register/Register.jsx"
import Navbar from "../src/Components/Navbar/Navbar.jsx"
import Footer from "../src/Components/Footer/Footer.jsx"
import Home from "../src/Components/Home/Home.jsx"
import Btncontrol from "../src/Components/Btncontrol/Btncontrol.jsx"
import Control from "../src/Components/Control/Control.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layouts/Layout';
import  { Toaster } from 'react-hot-toast';

function App() {
  
  let routes=createBrowserRouter([
    {
      pass:'',
      element:<Layout  />,
      children:[         
        {path:'/' , element:<Register/>},
        {path:'/Register' , element:<Register/>},
        {path:'login' , element:<Login  />},
        {path:'/RealTimeData' , element:<RealTimeData/>},
        {path:'/Crud' , element:<Crud/>},
        // {path:'*' , element:<NotFound/>},

      ]
    },
  ]

  )
  return (
    <>
     <Toaster/>

{/* <Crud/> */}
<RouterProvider router={routes}/>
   {/* <Crud/> */}
     {/* <RealTimeData/> */}
     {/* <Btncontrol/> */}
     {/* <Control/> */}
    
    </>
  );
}

export default App;
