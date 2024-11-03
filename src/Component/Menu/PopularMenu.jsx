import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
  fetch('menu.json')
  .then(res=>res.json())
  .then(data =>{
    const popularItems =data.filter(item=>item.category==='popular')
    setMenu(popularItems)
  })
},[])

  return (
    <div>
      <div className="bg-violet-400">
        <SectionTitle
          name={"Our Menu"}
          title={"All kinds of food Which you need"}
        ></SectionTitle>
      </div>
      <div className="grid grid-cols-2  gap-10 bg-yellow-400">
       {
        menu?.map(item=><MenuItem 
        item={item}>
       
         
        </MenuItem>)
       }
      </div>
    </div>
  );
};

export default PopularMenu;
