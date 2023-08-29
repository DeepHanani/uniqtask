import React from 'react'
import { useSelector } from 'react-redux'
import './ProdDisplay.css'
import CartItem from './CartItem'
import ItemDisplay from '../ItemDisplay'


export default function ProdDisplay() {
   const all = useSelector(y=>y.item.data);
   console.log(all , "uuuu")

   
  return (
    <>
    <ItemDisplay/>
    <div className='cartContainer'>
{
         all.map((value)=>{
                  
            return(
                <div className='miniContainer'>
                <div className='cartImgDiv'>
                <img src={value.img}/>
                </div>
                <div className='contantDiv'>

                <div className='titleDiv'>
                <h3>{value.title}</h3>
                <hr></hr>
                </div>
                
                <div className='btnContainer'>
                 
                <p>{value.price} RS</p>
                </div>
               
              <div className='description'>
             <p>{value.desc}</p>
              </div>
                </div>
                
                </div>
            )
         })
}
    

    
    </div>
    </>
  )
}
