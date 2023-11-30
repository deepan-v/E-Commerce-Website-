import React, { useContext, useEffect } from 'react'
import CartIcon from 'bootstrap-icons/icons/cart.svg'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import { StateContext } from '../ContextAPI/ContextItem'

export const Navbar = () => {

  let {NavCount} = useContext(StateContext)

   let total = NavCount()
  
  

  return (
    <div className='Navbar'>
        <div className='Links'>
            <Link to='/'> Shop</Link>
            <Link to='/cart'> 
                <img className='NavIcon' src={CartIcon} alt="" />
            <p className='ForTotal'>{total}</p>
            </Link>
        </div>
    </div>
  )
}
