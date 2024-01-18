import React from 'react'
import '../Contact/contact.css'
import Image from 'next/image'
import BearIcon from '../assets/bear-icon.png'
import SpeechBubble from '../assets/speech-bubble.png'

const Contact = () => {
  return (
    <div class='connect'>
        <div>
            <Image
            src={BearIcon}
            width={500}
            height={550}
            alt='connect-img'/>
        </div>
        <div class='connect-class'>
            <h1>Let&apos;s Connect!</h1>
            <p>@super.gummies.com</p>
            <p>www.supergummies.com</p>
        </div>
    </div>
  )
}

export default Contact