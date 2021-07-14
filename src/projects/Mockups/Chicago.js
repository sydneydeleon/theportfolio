import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ResumeHeader from '../../images/floralhead.png';
import Mock from './images/gravitylanding.png';
import './Mockups.css';

function ProjChicago() {
    return (
        <>

        <Sidebar />

        <div className="content">
        <div className="portfolio-works-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="portfolio-works-header-title">Chicago</div>

        </div>

        <div className="portfolio-works-mockup-desc"> 
            <em>Chicago Bar & Grille</em> is a lounge attached to the Gravity nightclub. I was tasked with redesigning their website, and this is the render to the outline I created in Adobe XD.
            </div>

        </div>

        <div className="portfolio-works-mockup-img">
            <img src={Mock} alt="mockup" />
        </div>

        <Footer />

        </>
    )
}

export default ProjChicago
