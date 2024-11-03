import React from 'react';

const MenuItem = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        <div className=' m-3 bg-yellow-400'>
           <div className='flex space-x-4 '>
           <img  style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
           <div className=' '>
            
            <h1 className=''>{name}</h1>
            <h1 className=''>{recipe}</h1>
           </div>
           <h1 className='flex-1 w-1/4'>{price}</h1>
           
            </div>
            
            
        </div>
    );
};

export default MenuItem;