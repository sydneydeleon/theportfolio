import React from 'react'
import './BlackFlag.css';
import BFHeader from './images/logo.png';
import BFHome from './images/icon_one.png';
import BFAbout from './images/icon_two.png';
import BFStaff from './images/icon_three.png';
import BFPrograms from './images/icon_four.png';
import BFGallery from './images/icon_five.png';
import BFContact from './images/icon_six.png';
import BFSam from './images/samurai.png';
import BFInstructors from './images/instructors.png';
import BFMap from './images/map.png';
import BFFb from './images/facebook.png';
import BFT from './images/twitter.png';
import BFG from './images/google.png';
import BFIg from './images/insta.png';
import BFPolaroids from './images/Untitled-1.png';

function ProjBlackFlag() {
    return (
        <>
        <div className="flagbody">

        <section id="flagsection1">
        <div className="flag-header">

            <img src={BFHeader} />
            
        </div>
        </section>
        <div className="flag-navi">
            <ul>
                <li><a href="#flagsection1"><img src={BFHome} />
                <br />REFRESH</a></li>
                <li><a href="#flagsection2"><img src={BFAbout} />
                <br />MISSON</a></li>
                <li><a href="#flagsection3"><img src={BFStaff} />
                <br />MASTERS</a></li>
                <li><a href="#flagsection4"><img src={BFPrograms} />
                <br />PROGRAMS</a></li>
                <li><a href="#flagsection5"><img src={BFGallery} />
                <br />GALLERY</a></li>
                <li><a href="#flagsection6"><img src={BFContact} />
                <br />CONTACT</a></li>
            </ul>
            <div className="line">&nbsp;</div>
        </div>

        <section id="flagsection2">
        <img src={BFSam} className="flag-about-img" />
        <h1>BLACK FLAG MARTIAL ARTS</h1>
        <div className="flag-about">
        Black Flag Martial Arts studio was founded in 2012 by Henry Punk the third and Geordie 'Badass' Jenkins.<br /><br />As punk and grunge enthsuaists, the majority of the things they enjoyed came from art. After all, music, visual art, and the like are where grunge thrives. However, as people who were interested in health and fitness as well, they were lacking. Their fancies were, to say the least, untickled.<br /><br />They realized that there weren't any facilities or gyms dedicated to people like them. People who were different, edgy, and shunned by polite society. People who enjoy being the way that they are.<br /><br />So they set out to create what the world wasn't ready for: a grunge dojo. A place for the weirdest of the weird, the hardcore population who wants to better themselves physically. A not so safe haven where punks could learn to kick ass without having the unforgiving judgments of society.<br /><br />he two were traveling through Seattle (which apparently is the birthplace of grunge, though that fact does not sound real what so ever) when this idea occured.<br /><br />Once they returned home to Get Wreckt City, USA, Henry and Badass pooled their resources together to buy an abandoned warehouse in the middle of nowhere. It is here where Black Flag was born.<br /><br />It has been open and operating as a health and safety department nightmare ever since.<br /><br />At Black Flag Martial Arts, our only commitment is to being the best version of ourselves.
        </div>

        </section>

        <section id="flagsection3">
            <div className="flag-staff-holder">
        <img src={BFInstructors} className="flag-staff-img" />
        <div className="flag-staff-desc">
            <h1>MEET THE CREW</h1>
            <p>Here at the Black Flag Martial Arts Academy, we're home to some of the most talented instructors in the nation. Not only is every mentor that walks through our doors thoroughly back checked and screened, but they're put to the test. Rigious training and drills make them prove their punk and grungeness before they're even allowed in the same room as our uniforms.<br/><br/>Every member of our team is dedicated to the cause, dedicated to grunge, and most importantly: dedicated to you. We flow like a well oiled machine, working hard to make you the best you can be physically, mentally, and emotionally. At Black Flag, we're not just a martial arts studio. We're a family.</p>
        </div>
        </div>
        </section>

        <section id="flagsection4">
        <h2>OUR PROGRAMS</h2>
            <div className="flag-programs">

                <div className="flag-pro">
                <h1>M.M.A.</h1>
			<p>Mixed martial arts, or MMA, is a combat sport in which two punks attempt to achieve dominance over one another by utilizing three general tactics: striking, finishing holds, and control. It's what a lot of white men in Los Angeles enjoy learning for some reason. We think they confuse it for crossfit.</p>
                </div>

                <div className="flag-pro">
                <h1>KARATE</h1>
			<p>A system of unarmed combat using the hands and feet to deliver and block blows. It's all about self control and discipline, not just kicking ass. Performed barefeet in our gravel pit for optimum grunge achievage. The practice was created by the iconic film entitled, 'The Karate Kid'.</p>
                </div>

                <div className="flag-pro">
                <h1>KRAV MAGA</h1>
			<p>A form of self defense and physical training that is based on the use of reflexive responses to threatening situations. The practice first originated in the Israeli army in the 1940s. Forget it. You're not even ready for this jelly. Don't bother asking.</p>
                </div>

                <div className="flag-pro">
                <h1>STREET FIGHTING</h1>
			<p>Hand to hand combat is already intense enough but throw away the rulebook and what have you got? Chaos, and its flying at your face in the form of fists, knives, and other weapons. Learn how to defend yourself and prepare for the unexpected in this advanced class. Waivers required.</p>
                </div>

                <div className="flag-pro">
                <h1>Survive the pit</h1>
			<p>Moshpits. The crown jewel of every live show. The not only puts you in front of your favorite band but it drops you right in the center of the action. However, they're not for the weak of heart. Learn proper pit etiquette and how to take care of you, your friends, and your peers in a pit.</p>
                </div>

                <div className="flag-pro">
                <h1>SELF DEFENSE</h1>
			<p>Learning how to your protect yourself in every day life is a skill that we at Black Flag have deemed critical. You never know where your day is going to take you or what the night may throw at you. Set the time aside to learn how to protect yourself in emergencies.</p>
                </div>

            </div>
        </section>

        <section id="flagsection5">
            <div className="flag-gal-holder">
            <div className="flag-gallery">
                <h1>THE GALLERY</h1>
                <p>Check it out for yourself.</p>
            </div>

            <div className="elfbox">

            
                    <img src={BFPolaroids} />
            </div>
        </div>
        </section>

        <section id="flagsection6">
        
        <div className="flag-contact-container">
        <h1>Information</h1>
        <p>Reach out to us or stop in to learn more.</p>
            <div className="flag-contact">
                <h1>Location</h1>
                <p>Black Flag Dojo<br/><br/>
                123 Hardcore Lane<br/>
                Get Wreckt City, Usa 90210<br/><br/>
                Phone: +1 (555) 555 5555<br/>
                Fax: +1 (555) 555 5555<br/>
                Email: info@blackflag.com<br/><br/>
                Weekdays: 4pm-10pm<br/>
                Weekends: 12pm-11pm</p>

                <img src={BFMap} />
            </div>


        </div> 

        <div className="flag-contact-social">
            <img src={BFFb} />
            <img src={BFT} />
            <img src={BFG} />
            <img src={BFIg} />
        </div>


        </section>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>


        </div>
        </>
    )
}

export default ProjBlackFlag
