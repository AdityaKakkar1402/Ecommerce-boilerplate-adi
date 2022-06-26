
import './App.css';
import {useState} from 'react';
import React from 'react';

function App() {
  const [items, setitems] = useState([
    {
      key:4,
      name:"Darrell Gardner",
      checked:true
    },
    {
      key:5,
      name:"Lina McLaughlin",
      checked:true
    },
    {
      key:7,
      name:"Glenn Daniels",
      checked:true
    },
  ])
  const handleChange=(id)=>{
    console.log(`key:${id}`);
    const listitem=items.map((item)=>
    item.key===id?{...item,checked:!item.checked}:item)
    setitems(listitem);
    localStorage.setItem('shoppinglist',JSON.stringify(listitem))

  }

  return (
    <div className="App">
      <ul>
        {items.map((item)=>(
          <li className="item" key={item.key}>
            <p className="keyli">{item.key}</p>
            <p className="nameli">{item.name}</p>
            {/* //anonamous func */}
            <input type="checkbox" 
            onChange={()=>handleChange(item.key)} 
            checked={item.checked} name="" id="" className="check"/>
            <input type="button" value="delete " />

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
