import React from 'react'
import './NewHorizons.css';
import NewHorizonsHeader from './NewHorizonsHeader';
import NewHorizonsMenu from './NewHorzionsMenu';
import Daisy from './images/daisy.png';
import HorizonsLogo from './images/logo.png'

function ProjHorizonsHome() {
    return (
        <>
        <NewHorizonsHeader />
        <NewHorizonsMenu />
        <div className="horizons-container">
            
        <div className="horizons-side">
            
            <img src={Daisy} alt="Head" />

            <h1>OVERVIEW</h1>
            <p>Welcome to <b>HORIZONS</b>, an info hub for players. I'll be sure to tell Tom Nook you stopped by!</p>
            
            </div>

            <div className="horizons-banner">
                Welcome back, Mayor!
            </div>

            <img src={HorizonsLogo} className="horizons-logopic" />


        </div>
        
</>
    )
}

export default ProjHorizonsHome
