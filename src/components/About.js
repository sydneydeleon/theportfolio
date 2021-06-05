import React from 'react'
import './About.css';
import ResumeHeader from "../images/floralhead.png";
import * as GiIcons from "react-icons/gi";

function About() {
    return (<>
        <div className="portfolio-about-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
            <div className="portfolio-about-tit">About</div>
        </div>

        <div className="portfolio-about-container">

            <div className="portfolio-about-info">

                <h1><iconss><GiIcons.GiGlassHeart/></iconss>Pleased to meet you!</h1>
                
                Hi! I'm <b>Nini</b>, a mid twenty something from one of those chilly northeast states. I'm an independent web developer, aspiring artist, and recent college graduate. As a teenager, I fell into coding for fun—I taught myself the ins and outs of html/css in order to add my own personal flair to any of my various social media accounts. Soon enough, it became a passion of mine. I finally understood that <i>spark</i> I always heard artists talking about. I realized the way that painters express themselves with brushes and canvas, or poets through rhythm and rhyme—I can express myself through code. For me, taking a blank web page and using various programming languages to turn it into something beautiful was just as therapeutic and important to me as it was to them. So, here I am, confidently perched at the intersection of art and technology: hoping to put my passions to good use.
            </div>
            
            
        </div></>
    )
}

export default About
