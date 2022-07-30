import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaUserAlt,FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app.css"
import {AiFillHeart} from 'react-icons/ai';
import { useAuth } from '../firebase';

import { Link } from 'react-router-dom';

const Header = () => {
  const currentUser=useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="navcont " id="navbarmain">
     <Container>
     
     <Link to="/" className="navhead " id="navleftitem" >Adi Ecom.</Link>

     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto navitem" id="navrightitems">
      
        <Link to="/fav" className="navrightitems">
     <AiFillHeart className="carticon"/>Favourate
      </Link>
      <Link to="/cart" className="navrightitems">
     <FaShoppingCart className="carticon"/>Cart
      </Link>
  
 

      <Link to="/signin" className="navrightitems"><FaUserAlt className="usericon"/>{currentUser?.email} <h5 className={currentUser?"hide":"show"}>Sign in</h5> </Link>
    

   
     

    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    </div>
  )
}

export default Header