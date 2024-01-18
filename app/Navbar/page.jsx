import React from 'react'
import Image from 'next/image'
import '../Navbar/navbar.css'
import Cart from '../assets/cart.png'

const Navbar = () => {
  return (
    <div class='navbar'>
        <div class='nav-header'>
            <h1>SuperGummies.</h1>
        </div>
        <div class='nav-list'>
            <p>Sale</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <div class='nav-cart'>
            <Image
            src={Cart}
            alt='cart-img'
            width={40}
            height={40}/>
        </div>
    </div>
  )
}

export default Navbar