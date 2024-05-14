import React from 'react'
import './Footer.css'
import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='Footer'> 
      <div className="footer">
        <div className="footer-icons">
          <a href="https://www.facebook.com/profile.php?id=100049231605967">
            <img src={facebook_icon}  alt="" /></a>
          <a href="https://www.instagram.com/abhisahani118/">
            <img src={instagram_icon}  alt="" />
            </a>
            <a href="https://twitter.com/codes_abhi">
           <img src={twitter_icon} alt="" />
           </a>
           
           <img src={youtube_icon} alt="" />
        </div>
        <ul>
          <li> FAQ</li>
           <li>Help Centre</li>                 
           <li>Account</li>
           <li>Media Centre</li>
            <li>Jobs</li>
           <li>Ways to Watch</li>
            <li>Terms of Use</li>
             <li>vSpeed Test</li>
              <li>Legal Notices</li>
             <li>Only on Netflix</li>
             <li> Contact with email</li>
             <li> support us</li>               
        </ul>
        <p className='copyright-text'>@ 1997-2024 Netflix.Inc. created by abhisahani</p>
      </div>
    </div>
  )
}

export default Footer