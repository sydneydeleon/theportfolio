import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ResumeHeader from '../../images/floralhead.png';
import Mock from './images/business1-1.png';
import './Mockups.css';

function ProjSalonOne() {
    return (
        <>

        <Sidebar />

        <div className="content">
        <div className="portfolio-works-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="portfolio-works-header-title">D'andrea's</div>

        </div>

        <div className="portfolio-works-mockup-desc"> 
            Nichole D'andrea is a local cosmetologist in the Valley. She had everything she needed to be successful in her own business: the talent, the creativity, and the drive. All she needed was a website to put it altogether. That's where I came in! I put together two mock ups for potential designs. This is <i>version one</i>.
            </div>

        </div>

        <div className="portfolio-works-mockup-img">
            <img src={Mock} alt="mockup" />
        </div>

        <Footer />

        </>
    )
}

export default ProjSalonOne
