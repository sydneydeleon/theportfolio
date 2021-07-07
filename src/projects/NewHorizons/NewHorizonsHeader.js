import React from 'react'
import './NewHorizons.css';
import HorizonsHeader from './images/header.jpg'

function NewHorizonsHeader() {
    return (
        <>
        <div className="horizonsbody"></div>
        <div className="horizons-header">
            <img src={HorizonsHeader} alt="Head" className="horizons-headerimg" />

            <div className="horizons-header-desc">

        Animal Crossing: New Horizons is a 2020 life simulation video game developed and published by Nintendo for the Nintendo Switch. It is the fifth main series title in the Animal Crossing series. New Horizons was released in all regions on March 20. New Horizons sees the player assuming the role of a customizable character who moves to a deserted island after purchasing a package from Tom Nook, a tanuki character who has appeared in every entry in the Animal Crossing series. Taking place in real-time, the player can explore the island in a nonlinear fashion, gathering and crafting items, catching insects and fish, and developing the island into a community of anthropomorphic animals.

        </div>
        </div>

<div className="horizons-header-title">NEW&nbsp;HORIZONS</div>
</>
    )
}

export default NewHorizonsHeader
