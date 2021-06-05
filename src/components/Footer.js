import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import MyLogo from '../images/myLogoIcon.png';

function Footer() {
    return (
        <div className="portfolio-footer">
            
            © 2021 Orpheus Designs. <i>Design, building, marketing, and more.</i> All rights reserved.
            <p><Link to="/contact" className="tocontact">contact info</Link></p>

            <img src={MyLogo} alt=""/>
            
        </div>
    )
}

export default Footer
