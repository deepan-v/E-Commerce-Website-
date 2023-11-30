import React, { useContext } from 'react'
import { StateContext } from '../../ContextAPI/ContextItem'
import '../Cart/Cart.css'


export const CartList = ({img , price , id , name , desc}) => {

  let {CartItems ,AddCartItem , ReduceCartItem} = useContext(StateContext)

  return (
    <div className='CartWrapper'>
       <img src={img} className='ItemsImage' width = '160px' />
       <div className='ProductDetails'>
          <h2 className='Cartname'>{name}</h2>
            <div className='ProductCountDetails'>
               <button onClick={()=>ReduceCartItem(id)} className='AddCartBtn'>-</button>
                 {CartItems[id]}
               <button onClick={()=>AddCartItem(id)} className='ReduceCartBtn'>+</button>
            </div> 
                  <h3> ${price}</h3>
       </div>
    </div>
  )
}
