import React from 'react';
import './Home.css';
import MobileLogo from '../images/mobilelogo.png';
import FullLogo from '../images/thelogo.png';

function Home() {
    return (
        <>
        <div className="logoHeader">
            <div className="logomobile">
                <img src={MobileLogo} alt="" />
            </div>

            <div className="logodesktop">
                <img src={FullLogo} alt="" />
            </div>
        </div>
        
        </> 
    )
}

export default Home
