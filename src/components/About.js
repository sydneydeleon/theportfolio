import React from 'react'
import './About.css';
import ResumeHeader from "../images/floralhead.png";

function About() {
    return (
        <div className="about">
            <div className="resume-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="resume-tit">About</div>
            </div>
            
        </div>
    )
}

export default About
