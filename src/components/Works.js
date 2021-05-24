import React from 'react';
import './Works.css';
import { WorksData } from './WorksData';
import { Link } from 'react-router-dom';

function Works() {
    return (
        <div className="content">

            <div className="works-nav"> 
            <b>HIGHLIGHTED SKILLS:</b> DESIGN • MOCK-UPS • BUILDING • MARKETING
            </div>


            <div className="works-content">
            {WorksData.map((item, index) => {
            return (

                <Link key={index} to={item.path}>
                <div className={item.cName}>
                    <img src={item.pic} />
                        <div className="works-title">
                        <h1>{item.title}</h1>
                        </div>
                </div>
                </Link>
            )
            })}

        </div>
        </div>
    )
}

export default Works
