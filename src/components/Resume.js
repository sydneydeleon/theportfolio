import React from 'react';
import './Resume.css';
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import FloralIcon from '../images/floralicon.png';

function Resume() {
    return (
        <div className="resume-container">
            <div className="resume-header">
                
                <div className="resume-title">
                    Resume
                </div>

                <div className="resume-intro">
                    Hi, I'm <span>Orpheus Designs!</span>
                    <ul><li>
                    I'm a <b>&#60; Web / &#62; designer,</b>
                    </li><li>
                    <b>&#60; Web / &#62; builder,</b>
                    </li>
                    <li>
                    <b>&#60; Web / &#62; wizard,</b>
                    </li><li>
                    <em>and more...</em>
                    </li>
                    </ul>
                </div>

            </div>

            <div className="resume-gradient">
            <div className="skill-title">
                        highlighted skills
                    </div>
                <div className="resume-skills">
                    <div className="skill">
                        <div className="skill-icon">
                            <FaIcons.FaSwatchbook/></div>
                        <div className="skill-label">
                            design</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <FaIcons.FaLaptopCode/></div>
                        <div className="skill-label">
                            html</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <FaIcons.FaRegFileCode/></div>
                        <div className="skill-label">
                            css</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <FaIcons.FaPencilAlt/></div>
                        <div className="skill-label">
                            writing</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <FaIcons.FaUserTag/></div>
                        <div className="skill-label">
                            branding</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <DiIcons.DiPhotoshop/></div>
                        <div className="skill-label">
                            photoshop</div>
                    </div>


                    <div className="skill">
                        <div className="skill-icon">
                            <DiIcons.DiIllustrator/></div>
                        <div className="skill-label">
                            illustrator</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <SiIcons.SiAdobeindesign/></div>
                        <div className="skill-label">
                            in design</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <SiIcons.SiAdobepremiere/></div>
                        <div className="skill-label">
                            priemere pro</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <AiIcons.AiOutlineCode/></div>
                        <div className="skill-label">
                            c/c++</div>
                    </div>

                    <div className="skill">
                        <div className="skill-icon">
                            <BiIcons.BiData/></div>
                        <div className="skill-label">
                            mysql</div>
                    </div>

                </div>

            </div>

            <div className="resume-experience">
                    experience
                </div>
        
            <div className="bottom-gradient">

                
            </div>
        
        </div>
    )
}

export default Resume
