import React from 'react';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ResumeHeader from '../../images/floralhead.png';
import Mock from './images/advanced_web.png';
import './Mockups.css';

function ProjFollettFamily() {
    return (
        <>

        <Sidebar />

        <div className="content">
        <div className="portfolio-works-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="portfolio-works-header-title">Follett Family Center</div>

        </div>

        <div className="portfolio-works-mockup-desc"> 
            The <em>Follett Family Center for Innovation and Entrepreneurship</em> is a space that gives flight to the imagination. The CIE's mission is to provide an open learning environment where the innovative spirit, technology, and skills align to drive the entrepreneurial mindset, with accessibility and affordability key.<br/><br/>My graduating advanced web technologies class partnered with the center to create a website for one of their summer bootcamps. I was humbly assigned the role of lead designer. Unfortunately, because of Covid-19, we were unable to complete the project as a class.<br/><br/>
            However, the project offered invaluable experience with working with clients professionally, and collaborating with a team on both the front and back ends of developing.
            </div>

        </div>

        <div className="portfolio-works-mockup-img">
            <img src={Mock} alt="mockup" />
        </div>

        <Footer />

        </>
    )
}

export default ProjFollettFamily
