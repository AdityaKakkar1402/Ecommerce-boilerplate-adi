import React from 'react';
import '../style/nav.css';

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
            <nav>
            
            <label className="logo">Resturant</label>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fa fa-bars" ></i>
                    
                </label>
                
                
                
                <div className="navbtn">
                    {menuList.map((curElement)=>{
                        return (
                            <button className="buttonsitem" onClick={()=>filterItem(curElement)}>{curElement}</button>

                        )
                    })}
                    
                    
                    
                </div>
            </nav>
            <section className="empty"></section>
            
        </>
    )
}

export default Navbar;
