import React from 'react'
import heroImg from '../assets/hero-img.png'
function Hero() {
    return (
        <main>
            <img className='hero-img' src={heroImg} alt="hero-img" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities <br /> led by one-of-a-kind hosts—all <br /> without leaving home.
            </p>
        </main>
    )
}

export default Hero