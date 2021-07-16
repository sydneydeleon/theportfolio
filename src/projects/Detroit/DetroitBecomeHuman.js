import React from 'react';
import DHeader from './videos/kara.mp4';
import { Link } from 'react-router-dom';
import NaviLogo from './images/circle.png'
import Triangle from './images/triangle2.png'
import './DetroitBecomeHuman.css';

function ProjDetroitBecomeHuman() {
    return (
        <>

        <div className="det-navi-bar">
            <img src={NaviLogo} alt="logo" className="det-navi-logo"/>
            <div className="det-navi-title">
                CYBER<b>LIFE</b>!!!!!!!!!!!!!!!!!
            </div>
            <div className="det-navi-links">

                <a href="#det-first">Demo</a> <a href="#det-second">Company</a> <a href="#det-third">Androids</a> <a href="#">Models</a> <a href="#">Survey</a> <a href="#">Purchase</a>
            </div>
        </div>

        <section id="det-first">
        <video
        autoPlay
        loop
        muted
        className="myVideo">
        <source src={DHeader} type="video/mp4"/>
        </video>
        </section>

        <section id="det-second">

            <div className="det-second-container">
                
                <div className="det-second-info">
                    <h1>CYBER<b>LIFE</b></h1>
                    <h2>The world's lead in android design.</h2>

                    <div className="det-sec-desc">
                    <img src={Triangle} alt="triangle"/>
                    <p>CyberLife is synonymous with extravagance. It's long since established itself as a force to be reckon with since its original launch in 2018. Founded in the resilient city of Detroit, Michigan by Elijah Kamski, a now world renowned scientist and philanthropist, CyberLife's goal was to improve the human experience.</p>

                    <p>Through the creation of Androids, this was more than achieved. And though the founder has since stepped down from the company, CyberLife continues to grow more and more each year. It has comfortably sat at the top of the technological food chain for the last twenty years.</p>
                    </div>
                </div>
            </div>

        </section>

        <section id="det-third">

            <div className="det-third-container">
                fucker 2
            </div>
            
        </section>

        <section id="det-fourth">

            <div className="det-fourth-container">
                fucker 4
            </div>

        </section>

        </>
    )
}

export default ProjDetroitBecomeHuman
