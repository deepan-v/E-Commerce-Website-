import React from 'react'
import { shopItemsData } from '../../Data'
import { ShopElement } from './ShopElement'

export const Shoppingitem = () => {
  return (
      <> 
        {shopItemsData.map((Data)=>{
          return (
            <ShopElement {...Data}/>
          )
        })}
      </>
  )
}