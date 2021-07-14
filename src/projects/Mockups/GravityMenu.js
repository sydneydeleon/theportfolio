import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ResumeHeader from '../../images/floralhead.png';
import Mock from './images/gravity.png';
import './Mockups.css';

function ProjGravityMenu() {
    return (
        <>

        <Sidebar />

        <div className="content">
        <div className="portfolio-works-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="portfolio-works-header-title">Gravity</div>

        </div>

        <div className="portfolio-works-mockup-desc"> 
            <em>Gravity</em> is a nightclub attached to the Chicago Bar & Grille lounge. The owners approached me to redesign their bottle service menu, which displays the prices for different bottles of liquor for their customers.
            </div>

        </div>

        <div className="portfolio-works-mockup-img">
            <img src={Mock} alt="mockup" />
        </div>

        <Footer />

        </>
    )
}

export default ProjGravityMenu
