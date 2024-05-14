import React from 'react'
import './Home.css'
 import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "/hero_banner.jpg"
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitileCards from '../../components/TitileCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import TitleCards from '../../components/TitileCards/TitleCards'


const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <div className='Hero'>
      <img src={hero_banner} alt=" "  className="banner-img"/>
        <div className="hero-caption">
          <img src={hero_title} alt=""  className='caption-img'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Quos saepe nisi natus? Ut, aut neque illum dicta non architecto amet.</p>
            <div className="hero-btns">
             <button className='btn'><img src={play_icon} alt="" />Play</button>
             <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitileCards/>
        </div>
    </div>
    <div className="more-cards">
      <TitleCards title={"blocbuster movies"} category={"top_rated"}/>
        <TitleCards title={"only or netfliex movies"} category={"popular"}/>
          <TitleCards title={"upcoming movies"} category={"upcoming"}/>
        <TitleCards title={"top pics for your movies"} category={"now_playing"}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home