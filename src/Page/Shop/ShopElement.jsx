import React from 'react'
import { useContext } from 'react'
import { StateContext } from '../../ContextAPI/ContextItem'

export const ShopElement = ({id , name , price , desc , img}) => {
  
  let ContextValue = useContext(StateContext)
  let {AddCartItem , CartItems} = ContextValue


  return (
    <div key={id} className='ItemsFromShop'>
        <img className='ProductItem' src={img} width='100%'  style={{borderRadius:'4px 4px 0px 0px'}}  />
        <div className='ParaItem'>
            <h3>{name}</h3>
            <p style={{marginTop:'10px', textAlign:'center'}}>{desc} </p>
            <p style={{marginTop:'10px'}}> ${price}</p>
             <button onClick={()=> AddCartItem(id)} className='ForAdd'>Add Cart {CartItems[id] > 0 && ` (${CartItems[id]})`} </button>
        </div>
    </div>
  )
}
