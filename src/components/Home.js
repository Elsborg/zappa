import React from 'react'
import '../style/home.css'
import heroVideo from '../assets/kitty.mp4'

const Home = () => {
  return (
    <div name="home" className='home-container'>
        <div className='overlay'></div>
        <video className='hero-video' src={heroVideo} autoPlay loop muted />
        <div className='content'>
            <h1 className='hero-text'>Velkommen Til Café Zappa</h1>
        </div>
        
    </div>
  )
}

export default Home