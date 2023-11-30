import { createContext, useState } from "react";
import { shopItemsData } from "../Data";

let MainfuncToAdd = ()=>{
    let Basket = {}
    for(let i = 1 ; i <= shopItemsData.length ; i++){
        Basket[i] = 0
    }
    return Basket
}



export let StateContext = createContext()

let MainState = (props)=>{

   let CalculateTotal  = ()=>{
    let Total = 0
     for(let key in CartItems){
        if(CartItems[key] > 0){
          let ItemsInfo =  shopItemsData.find((product)=>product.id === Number(key))
          console.log(CartItems[key] * ItemsInfo.price);
          Total += CartItems[key] * ItemsInfo.price
        }
     }
     return Total
   }

    let [ CartItems , SetCartItems] = useState(MainfuncToAdd()) 

    let NavCount = ()=>{
       let Count = 0
        for(let key in CartItems){
           Count +=  CartItems[key]  
        }
        return Count
    }  
    
    
   let AddCartItem = (AddId)=>{
     SetCartItems((Prev)=> ({...Prev , [AddId]:Prev[AddId] + 1 }))
   }
   let ReduceCartItem = (AddId)=>{
     SetCartItems((Prev)=> ({...Prev , [AddId]:Prev[AddId] - 1 }))
   }

   let StateManagement = {
    CartItems,
     AddCartItem,
     ReduceCartItem,
     MainfuncToAdd,
     CalculateTotal,
     NavCount
   }

   return (
       <StateContext.Provider value={StateManagement}>
          {props.children}
       </StateContext.Provider>
   )
}


export default MainState