import React from 'react';
import './Home.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MobileLogo from '../images/mobilelogo.png';
import FullLogo from '../images/thelogo.png';

function Home() {
    return (
        <>
        <Sidebar />
        <div className="portfolio-home-header">
            <div className="portfolio-home-logo-mobile">
                <img src={MobileLogo} alt="logo" />
            </div>

            <div className="portfolio-home-logo-desktop">
                <img src={FullLogo} alt="logo" />
            </div>
        </div>
        <Footer />
        </> 
    )
}

export default Home
