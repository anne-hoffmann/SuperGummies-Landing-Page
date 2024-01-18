import React from 'react';
import '../Products/products.css'
import Image from 'next/image';
import Item1 from '../assets/item-1.png'
import Item2 from '../assets/item-2.png'
import Item3 from '../assets/item-3.png'

const Products = () => {
  return (
    <div class='product-page'>
        <h1>Products</h1>
        <div class='products'>
            <div class='item'>
                <Image
                src={Item1}
                alt='item-1'
                width={300}
                height={350}
                class='product-img'/>
                <h2>Gummy A</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class='item'>
                <Image
                src={Item2}
                alt='item-2'
                width={300}
                height={350}
                class='product-img'/>
                <h2>Gummy B</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class='item'>
                <Image
                src={Item3}
                alt='item-3'
                width={300}
                height={350}
                class='product-img'/>
                <h2>Gummy C</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

    </div>
  )
}

export default Products