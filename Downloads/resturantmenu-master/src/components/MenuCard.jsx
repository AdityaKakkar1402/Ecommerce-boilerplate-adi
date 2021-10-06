import React from 'react';
import '../style/cards.css';

const MenuCard = ({menuData}) => {
    // console.log(menuData);

    return (

        <div className="cardbody">

    {menuData.map((curElement )=>{
        return(
            <>

        <div className="cardstructure" key={curElement.id} >
        
        
        <div className="number">
        {curElement.id}
        </div>
        <div className="subtitle">
        {curElement.category}
        </div>
        <div className="title">
        {curElement.name}
        </div>
        <div className="discription">
        {curElement.description}
        </div>
        <img src={curElement.image} className="cardimage" alt="hello" />
        <div className="readmore">
            <button className="orderbtn">Order Now</button>
        </div>
    
    



</div>
            </>
    )
    })}

      
            
        </div>
    )
}

export default MenuCard
