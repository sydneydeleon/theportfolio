import React from 'react'
import './NewHorizons.css';
import NewHorizonsHeader from './NewHorizonsHeader';
import NewHorizonsMenu from './NewHorzionsMenu';
import NooksCranny from './images/nookscranny.jpg';
import GuestServices from './images/guestservices.jpg';
import Museum from './images/museum.jpg';

function HorizonsObjectives() {
    return (
        <>
        <div className="horizonsbody" style={{ height:2900}}></div>
        <NewHorizonsHeader />
        <NewHorizonsMenu />
        <div className="horizons-container">
        <h2>Game objectives</h2>	

<img src={NooksCranny} className="obj" />

<div className="horizons-objdesc">

    <h6>Nook's Cranny</h6>
    
    <p>Nook's Cranny (タヌキ商店) is the first incarnation of Tom Nook's Store in most main stream. In New Horizons, the deserted island initially has no store building. It is operated by Timmy and Tommy, its inventory is larger. Players can still buy and sell goods with Timmy in the Resident Services tent in the meantime, but constructing a store requires reaching several milestones:<br/>

<ul>

    <li>Pay off the initial 5,000 Nook Miles debt</li>
    <li>Upgrade from a tent to a house</li>
    <li>Donate 5 unique bugs/fish to Tom Nook and place Blathers' tent</li>
    
</ul>

Then, the specific requirements in order to upgrade Nook's Cranny are as follows:<br/>

<ul>

    <li>At least 30 days have passed since the shop was built</li>
    <li>The combined value of all purchases and sales at the shop has exceeded 200,000 bells</li>
    
</ul>
</p></div>

<img src={GuestServices} className="obj" />

<div className="horizons-objdesc">

    <h6>Resident Services</h6>
    
    <p>Resident Services is the main hub for the island's development in Animal Crossing: New Horizons and the equivalent of the Town Hall in previous games. It begins as a small tent in a cleared area, but as the island grows, it is upgraded to a permanent building with a paved plaza. It is open at all hours of the day.<br/><br/>
    The Resident Services tent is the first version of Resident Services. Tom Nook and the Nooklings set up shop here, offering a free DIY crafting table, the Nook Stop, and a recycling bin. Tom Nook offers DIY workshops, guides the player in developing the island, and conducts ceremonies for the opening of new infrastructure, while Timmy has a small selection of items for sale and will purchase items from the player. After Nook's Cranny is constructed, Timmy and Tommy will move their business there.<br/><br/>
    After the player has completed Nook's Cranny, opened the Museum, and three more villagers have moved to the island, Tom Nook will decide to construct a permanent Resident Services building.</p></div>

<img src={Museum} className="obj" />

<div className="horizons-objdesc">

    <h6>The Museum</h6>
    
    <p>The museum is a building found in all the Animal Crossing series games, except for Animal Forest. It is an establishment for the collection and display of bugs, fish, fossils, paintings, and sculptures. The museum is curated by an owl named Blathers, who stands in the entrance foyer. In Wild World, City Folk, and New Leaf, Celeste also works in the museum, either running the observatory or the museum shop.<br/><br/>
    In New Horizons, the museum is an upgradeable building. Initially, the island has no museum at all, but Tom Nook will ask the player to bring him any interesting fish or bugs to pass on to his friend, Blathers. After 5 fish and/or bugs are turned in, Blathers will decide to travel to the island in-person to study its ecosystem, and Tom Nook will give the player a tent to set up for him.<br/><br/>
    The tent is completed the day after the plot is placed, and Blathers will urge the player to not only bring him more bugs and fish, but to explore more of the island and search for fossils; he will present the player with the flimsy shovel and vaulting pole DIY recipes to aid them. After Blathers is given 15 bugs, fish, and/or fossils, he will announce that he has received permission to build a full-fledged museum on the island. </p></div>
        </div>
        
</>
    )
}

export default HorizonsObjectives
