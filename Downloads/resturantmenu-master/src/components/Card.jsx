import React,{useState} from 'react';//rafce

import Menu from '../menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';



const uniqueList=[
    ...new Set(
        Menu.map((curElement)=>{
            return curElement.category;
        })
    ),"All",
];

console.log(uniqueList);



export const Card = () => {

    const [menuData,setMenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);

    const filterItem=(category)=>{
        if (category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedbuttonst=Menu.filter((curElement)=>{
            return curElement.category===category;
        });
        setMenuData(updatedbuttonst);
    }
    


    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList} setMenuList={setMenuList}/>
        <MenuCard menuData={menuData}/>
       
        </>
    )
}




