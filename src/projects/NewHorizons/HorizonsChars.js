import React from 'react'
import './NewHorizons.css';
import NewHorizonsHeader from './NewHorizonsHeader';
import NewHorizonsMenu from './NewHorzionsMenu';
import MainCharacter from './images/maincharacter.png';
import TomNook from './images/tom.jpg';
import TimmyTommy from './images/timmytommy.jpg';
import Wilbur from './images/wilbur.jpg';
import Orville from './images/orville.jpg';
import Blathers from './images/blathers.jpg';

function HorizonsChars() {
    return (
        <>
        <div className="horizonsbody" style={{ height:3200}}></div>
        <NewHorizonsHeader />
        <NewHorizonsMenu />
        <div className="horizons-container">
        <img alt="pic" src={MainCharacter} className="mc" />

<div className="npctitle">Meet the<br /><span><i>islanders!</i></span></div>

<div className="npcdesc">The island might be deserted when you arrive, but we're not sending you alone! Meet the crucial <b>NPCs</b> of New Horizons.</div>

<div className="character va">

<img alt="pic" src={TomNook} />

<h5>Tom Nook</h5>

<p>Tom Nook (たぬきち) is a character who plays the most important role in all of the games. He is termed a raccoon in the western versions of the game but a tanuki in the Japanese version. In all games leading to New Leaf, he is the manager of the town shop. In New Horizons, Nook acts as the head of Nook Incorporated. He acts as the leader on the island, acting as task giver and island upgrader.</p>
    
</div>

<div className="character vb">

<h5>Timmy & Tommy</h5>

<p>Timmy (better known as Timmy) (まめきち) and Tommy (つぶきち) are the twin apprentices of Tom Nook, the tanuki who runs the town's store. Tom Nook explains to the player that Timmy and Tommy are not related to him by blood, and thinks of them as his pupils and himself as the mentor, stating that he wants to teach others good economic principles in order to help them from suffering the same pitfalls he did when growing up. </p>

<img alt="pic" src={TimmyTommy} />


    
</div>

<div className="character va">

<img alt="pic" src={Wilbur} />

<h5>Wilbur</h5>

<p>Wilbur (ロドリー, Rodrī) is a dodo special character who serves as a pilot for Dodo Airlines in Animal Crossing: New Horizons. He allows the player to go on different Island Tours. He refers to himself as "stovetop rubber band" and the player as "bellbottom bebop" amongst several other nicknames.</p>
    
</div>

<div className="character vb">

<h5>Orville</h5>

<p>Orville (モーリー, Mōrī) is a special character introduced in Animal Crossing: New Horizons as a receptionist at the Dodo Airlines airport in the player's town. His brother, Wilbur, is a pilot for the airline.</p>

<img alt="pic" src={Orville} />


    
</div>

<div className="character va">

<img alt="pic" src={Blathers} />
<br/><br/>
<h5>Blathers</h5>

<p>Blathers (フータ, Fūta) is an owl special character who serves the director of the Museum. Blathers first appeared in Animal Forest+ and has appeared in every Animal Crossing series game since. Players can patronize the Museum by bringing Blathers donations of fish, insects, fossils and paintings. Given his nocturnal nature as an owl, Blathers sleeps during the daytime at his post in the Museum.</p>
    
</div>
        </div>
        
</>
    )
}

export default HorizonsChars
