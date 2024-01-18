import React from 'react';
import '../Hero/hero.css';
import Image from 'next/image';
import BearIcon from '../assets/bear-icon.png'


const Hero = () => {
  return (
    <div class='hero'>
        <div>
            <Image
            class='bear-icon-2'
            src={BearIcon}
            alt='bear-icon'
            width={150}
            height={150}/>
            <Image
            class='bear-icon-6'
            src={BearIcon}
            alt='bear-icon'
            width={120}
            height={120}/>
            <Image
            class='bear-icon-7'
            src={BearIcon}
            alt='bear-icon'
            width={250}
            height={250}/>
        </div>
        <div>
            <h3>Introducing:</h3>
            <h1>Super<br/>Gummies</h1>
            <p>They&apos;re fruit snacks, for adults.</p>
            <button>Explore</button>
        </div>
        <div>
            <Image
            class='bear-icon-1'
            src={BearIcon}
            alt='bear-icon'
            width={100}
            height={100}/>
             <Image
            class='bear-icon-3'
            src={BearIcon}
            alt='bear-icon'
            width={300}
            height={300}/>
            <Image
            class='bear-icon-5'
            src={BearIcon}
            alt='bear-icon'
            width={150}
            height={150}/>
        </div>
    </div>
  )
}

export default Hero