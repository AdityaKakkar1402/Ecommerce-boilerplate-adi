import React from 'react'
import Homescreen from './screens/Homescreen'
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Product from './screens/Product';
import Signup from './Signup';
import Signin from './Signin';


const App = () => {
  return (
    <div>
      <Header/>
    <Routes>
     
        
    <Route path="/signup" element={<Signup/>}/>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/" element={<Homescreen/>}/>
     <Route path="/product/:id" element={<Product/>} />
    


     

   </Routes>
 
    </div>
  )
}

export default App

