import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ResumeHeader from '../../images/floralhead.png';
import Mock from './images/REDESIGN_FINAL_2.png';
import './Mockups.css';

function ProjJewelsTwo() {
    return (
        <>

        <Sidebar />

        <div className="content">
        <div className="portfolio-works-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="portfolio-works-header-title">Giampiero Bodino</div>

        </div>

        <div className="portfolio-works-mockup-desc"> 
            Giampiero Bodino is a luxury jeweller from Milan, Italy. His work is world renowned, and beloved internationally. For a project in one of my website design courses, we had to fight a website and propose several redesigns. This is number <em>two</em> of <em>three</em>.
            </div>

        </div>

        <div className="portfolio-works-mockup-img">
            <img src={Mock} alt="mockup" />
        </div>

        <Footer />

        </>
    )
}

export default ProjJewelsTwo
