import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ResumeHeader from '../../images/floralhead.png';
import PrintOne from './images/catharsis-print-1.png';
import PrintTwo from './images/catharsis-print-2.png';
import PrintThree from './images/catharsis-print-3.png';

import SocialOne from './images/catharsis-socials-1.png';
import SocialTwo from './images/catharsis-socials-2.png';
import SocialThree from './images/catharsis-socials-3.png';

import '../Gestalt/Gestalt.css';

function ProjCatharsis() {
    return (
        <>

        <Sidebar />

        <div className="content">
        <div className="portfolio-works-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="portfolio-works-header-title">Gestalt</div>

        </div>

        <div className="portfolio-works-gestalt-desc"> 
        <em>Catharsis</em> was an intense poetry performance put on by a University student. She needed to get the word out both on campus, locally in the community, and online, which is where I came in. I designed a marketing campaign to promote her project in all the ways she needed.
            </div>

        </div>

        <div className="portfolio-works-gestalt-img">
            <img src={PrintOne} alt="gestalt" />
            <p>An example of a <b>leave behind</b>, meant to be picked up by customers of other establishments.</p>

            <img src={PrintTwo} alt="gestalt" />
            <img src={PrintThree} alt="gestalt" />
            <p>Front <em>(top)</em> and back <em>(bottom)</em> of a <b>mailing card.</b></p>

            <img src={SocialOne} alt="gestalt" />
            <p>Designed to fit the <b>Facebook</b> post dimensions.</p>
            <img src={SocialTwo} alt="gestalt" />
            <p>Designed to fit the <b>Twitter</b> post dimensions.</p>
            <img src={SocialThree} alt="gestalt" />
            <p>Designed to fit the <b>Instagram</b> post dimensions.</p>

        </div>

        <Footer />

        </>
    )
}

export default ProjCatharsis
