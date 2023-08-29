import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProdDisplay from './other/ProdDisplay';
import { filterItem } from './action/ItemAction';
import './ItemDisplay.css';
import CartItem from './other/CartItem';
import { useNavigate } from 'react-router-dom';
export default function ItemDisplay(){

    

    const items = useSelector(y=>y.item);
    const[prod , setProd] = useState(items)

    const dispatch = useDispatch()

    const naviget = useNavigate()

    const filterProducts = (value)=>{

    dispatch(filterItem(value));
    naviget("/cartitem");
        
    }

    const allproducts = ()=>{
        naviget("/");
    }

    console.log(items.data)
  return (
    <>
    
    

    <div className='main'>
    <button onClick={allproducts} className='ALLbtn'>ALL Items</button>

    {
        items.data.map((value)=>{

            
            
            return (
                
                <button type="button" className="filerBtn" data-id="lunch" onClick={()=>filterProducts(value)}>{value.category}</button>
                
            )

        })
        
    }
    
   
   
    </div>
   
    </>
  )
}
