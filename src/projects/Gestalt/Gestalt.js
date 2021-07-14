import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ResumeHeader from '../../images/floralhead.png';
import HangTagOne from './images/hang-tag-1.png';
import BusinessCardOne from './images/business-card-1.png';
import Quote from './images/quote.png';
import Tshirt from './images/tshirt.png';
import './Gestalt.css';

function ProjGestalt() {
    return (
        <>

        <Sidebar />

        <div className="content">
        <div className="portfolio-works-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="portfolio-works-header-title">Gestalt</div>

        </div>

        <div className="portfolio-works-gestalt-desc"> 
        Based on theories of perception, <em>the Gestalt</em> principles explain how whole images are often perceived as more than the sum of their parts. Knowing and using gestalt theory in technical communication can help ensure that our visual messages will be understood and that our designs will be dynamic.<br/><br/>
        For my digital design course, our prompt was to create a marketing campaign for a faux company called 'Gestalt Designs', while incorporating the Gestalt design principle. This was a physical project, which means all art pieces were printed, lasered, or otherwise constructed in the end.
            </div>

        </div>

        <div className="portfolio-works-gestalt-img">
            <img src={HangTagOne} alt="gestalt" />
            <p>Front <em>(top)</em> and back <em>(bottom)</em> of a decorative <b>hang tag.</b> Lasered into a wood base.</p>
            <img src={BusinessCardOne} alt="gestalt" />
            <p>Front <em>(left)</em> and back <em>(right)</em> of a <b>business card.</b> Lasered into a wood base.</p>
            <img src={Quote} alt="gestalt" />
            <p>Front <em>(top)</em> and back <em>(bottom)</em> of a <b>hanging quote.</b> Lasered in gold on textured canvas.</p>

            <img src={Tshirt} alt="gestalt" />
            <p>Front <em>(left)</em> and back <em>(right)</em> of a <b>t-shirt.</b> Embrodiered onto simple cotton.</p>

        </div>

        <Footer />

        </>
    )
}

export default ProjGestalt
