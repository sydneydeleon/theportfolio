import React from 'react'
import './NewHorizons.css';
import NewHorizonsHeader from './NewHorizonsHeader';
import NewHorizonsMenu from './NewHorzionsMenu';
import Postcard from './images/postcard.png';

function HorizonsAbout() {
    return (
        <>
        <NewHorizonsHeader />
        <NewHorizonsMenu />
        <div className="horizons-container">
            <img src={Postcard} alt="Head" className="horizons-postcard" />

            <div className="horizons-title">What exactly is<br /><span><i>Animal Crossing</i>?</span></div>

            <div className="horizons-bodytext">

<p>Animal Crossing: New Horizons (あつまれ どうぶつの森 Atsumare Dōbutsu no Mori, Animal Forest: Gather) is a real-time social simulation video game developed by Nintendo. It was released on March 20, 2020, and is the eighth main-series game in the Animal Crossing series, after New Leaf. The story starts with the player living on a deserted island as part of Nook Inc. Getaway Package.
</p>
<p>The player assumes the role of a customizable character who moves to a deserted island after purchasing a deserted island package from Tom Nook, a tanuki character who is a staple of the series.The game proceeds in an open-ended fashion as the player explores the island, and develops it into a community of anthropomorphic animals.</p>

</div>

        </div>
        
</>
    )
}

export default HorizonsAbout
