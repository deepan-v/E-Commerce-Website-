import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../ContextAPI/ContextItem'
import { shopItemsData } from '../../Data'
import { CartList } from './CartList'
import { useNavigate } from 'react-router-dom'



export const CartItems = () => {
  let ContextItems = useContext(StateContext)
  let {CartItems , CalculateTotal  } = ContextItems
  let Navigate = useNavigate()
  let total = CalculateTotal()


  return(
    <>
    <div className='TopDetails'>
          <h3 style={{borderBottom:'2px solid grey' , marginBottom:'17px'}}> 
            {total > 0 ? <h3>Total Amount : ${total}</h3>:<h3> Cart Is Empty Please Add Some Products To Your Cart</h3> } 
          </h3>
         <div className='TopDetailschild' style={{display:'flex' , gap:'20px' , marginTop:'10px'}}>
          <button onClick={()=>Navigate('/')} className = 'Continue-Shopping' > Continue Shopping</button>
         <button className = 'ClearCartItems' > Clear Cart</button>
         </div>
      </div>
       {shopItemsData.map((items)=>{
        if(CartItems[items.id]!==0){
          return <CartList {...items}/>
        }
       })}
       
    </>
  )
     
}
