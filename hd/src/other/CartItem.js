import React from 'react'
import { useSelector } from 'react-redux'
import './ProdDisplay.css'
import ItemDisplay from '../ItemDisplay';
export default function CartItem() {

   const cartitems =  useSelector(y=>y.item.cart);
   console.log(cartitems,"hhhh")
  return (
    <>
    <ItemDisplay/>
    <div className='cartContainer'>
       {
        cartitems.map((value)=>{
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
