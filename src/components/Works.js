import React from 'react';
import './Works.css';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { WorksData } from './WorksData';
import { Link } from 'react-router-dom';
import ResumeHeader from "../images/floralhead.png";

function Works() {
    return (<>
        <Sidebar />
        <div className="content">
            <div className="portfolio-works-header" style={{ backgroundImage: `url(${ResumeHeader})` }}>
                <div className="portfolio-works-header-title">Portfolio</div>
            </div>

            <div className="portfolio-works-subtitle"> 
            <b>HIGHLIGHTED SKILLS:</b> DESIGN • MOCK-UPS • BUILDING • MARKETING
            </div>


            <div className="portfolio-works-content">
            {WorksData.map((item, index) => {
            return (

                <Link key={index} to={item.path}>
                    <div className="portfolio-works-item"  style={{ backgroundImage: `url(${item.pic})` }}>
                        <div className="portfolio-works-item-title">
                            <h1>{item.title}</h1>
                            <p>{item.subtitle}</p>
                            <span>{item.desc}</span>
                        </div>
                    </div>
                </Link>
            )
            })}

        </div>
        </div>
        <Footer /></>
    )
}

export default Works
