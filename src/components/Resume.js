import React from 'react';
import './Resume.css';
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

function Resume() {
    return (
        <div className="resume-container">
            <div className="resume-header">
                header
            </div>

            <div className="resume-col-container">

                <div className="resume-col-one">
                    
                    <div className="resume-title-a">
                        <h1>&#60; Experience /&#62;</h1>
                    </div>
                    <ul>

                        <li><span>Freelance Web Developer</span><br/>
                        <em>Self Employed </em>
                        <i>(Aug '20 to present)</i><br/><br/>
                        <strong>Position description</strong>
                        <p>I was in my senior year of college during the infancy of the Covid19 pandemic. With almost no options to look for work in a company during 2020, I dove into doing small coding, programming, and design jobs on commision. My projects varied from client to client, but most of them included heavy HTML / CSS / Javascript for their personal websites or graphics for marketing purposes (menus, logos, etc). 
                        </p>

                        </li>

                        <li><span>Escape Room Master</span><br/>
                        <em>Human Vs Room </em> 
                        <i>(Sep '18 to Jan '20)</i><br/><br/>
                        <strong>Position description</strong>
                        <p>As a room master, the main focus of my job was to operate the attraction for the clients and ensure the best possible customer service. From the moment the customer arrives until they are out the door, their experience was in my hands.
                        </p>
                        <strong>Highlights and duties</strong>
                        <p><b></b>Greet customers in a friendly and upbeat manner, confirming and completing their booking using online scheduling software.<br/>
                        <b></b>Carry out pre-game briefing, including performing a room-specific script, and outlining facility safety rules.<br/>
                        <b></b>Fully supervising the game from beginning to end, remotely monitoring customers with CCTV and communicating with them via walkie talkies.<br/>
                        <b></b>During supervision time and down time, reception duties also fell in my responsibilities. Dealing with telephone bookings, updating social media, and answering emails.<br/>
                        <b></b>Meet the customers when time runs out or they complete their room, complete the experience with a personalized debriefing, taking group photos, and escorting out.<br/>
                        <b></b>Cleaning rooms and resetting the game room to its original state, ensuring it is ready for the next customers.<br/>
                        <b></b>Help make emergency repairs and replacements to damaged or broken game equipment, as well as improving or revamping puzzles.
                        </p>
                        <strong>Takeaways</strong>
                        <p>
                        Before becoming a game master, I struggled with speaking in front of people. But the job forced me to face this head on every single day, and ever since then, I have not been nervous to lead a crowd. It also forced me to sharpen my multitasking and troubleshooting skills, as there were times I was running the entire facility by myself. This meant monitoring multiple rooms, while still greeting customers, cleaning, and answering phones.
                        </p>
                        </li>

                        <li><span>Nanny</span><br/>
                        <em>Private Client </em> 
                        <i>(Aug '14 to Sep '18)</i><br/><br/>
                        <strong>Position description</strong>
                        <p>As a nanny, I was responsible for providing nurturing and attentive care to 2 elementary aged children for several years. It was also my responsibility to be a good role model to them. 
                        </p>
                        <strong>Highlights and duties</strong>
                        <p><b></b>Pick up from school on time, as well as accompanying them to extra curricular activities, play dates, minor appointments, and coordinated recreational activities.<br/>
                        <b></b>Engage with children on personal/individual basis to build and maintain positive relationships with them.<br/>
                        <b></b>Assistance in homework assignments, school projects, and other necessary tutoring.<br/>
                        <b></b>Preparation of nutritious meals and snacks, providing lessons in the importance of balanced diets and home economics.<br/>
                        <b></b>Closely monitoring children's play activities to verify safety.<br/>
                        <b></b>Regularly travel with the family to assist with childcare on vacations and other outings.<br/>
                        <b></b>Perform light housekeeping duties and run errands, such as doing laundry or going grocery shopping.
                        </p>
                        </li>

                        <li><span>Sales Associate</span><br/>
                        <em>Dots Clothing </em> 
                        <i>(Dec '13 to March '14)</i><br/><br/>
                        <strong>Position description</strong>
                        <p>A sales associate is responsible for assisting customers throughout the buying process. It's their duty to promote company products while providing excellent customer service for their patrons. Common duties included restocking sales floors, housekeeping, memorizing promotions, and handling cash transactions.
                        </p>
                        </li>

                        <li><span>Cosmetologist's Assistant</span><br/>
                        <em>Freelance employer </em> 
                        <i>(June '13 to Aug '13)</i><br/><br/>
                        <strong>Position description</strong>
                        <p>While an assistant to a professional cosmetologist, my duties were to assist her with a number of weddings during my summer vacation. I orchestrated full makeup application for wedding parties, helped maintain looks throughout the day, and helped coordinate desired elements into coherent designs.
                        </p>
                        </li>

                    </ul>
                </div>

                <div className="resume-col-two">
                    <div className="resume-title-b">
                        <h1>&#60; Skills /&#62;</h1>
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <FaIcons.FaPaintBrush/>
                        </div>
                        Design
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <FaIcons.FaLaptopCode/>
                        </div>
                        HTML5
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <FaIcons.FaRegFileCode/>
                        </div>
                        CSS
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <GiIcons.GiCoffeeCup/>
                        </div>
                        Javascript
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <GiIcons.GiBookshelf/>
                        </div>
                        Writing
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <GiIcons.GiSpellBook/>
                        </div>
                        Storytelling
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <FaIcons.FaUserTag/>
                        </div>
                        Marketing
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <FaIcons.FaReact/>
                        </div>
                        React
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <SiIcons.SiCodecademy/>
                        </div>
                        C / C++
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <SiIcons.SiAdobephotoshop/>
                        </div>
                        Photoshop
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <SiIcons.SiAdobepremiere/>
                        </div>
                        Premiere
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <SiIcons.SiAdobedreamweaver/>
                        </div>
                        Dreamweaver
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <SiIcons.SiAdobeillustrator/>
                        </div>
                        Illustrator
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <SiIcons.SiAdobeindesign/>
                        </div>
                        InDesign
                    </div>

                    <div className="resume-skill">
                        <div className="resume-icon">
                            <SiIcons.SiAdobexd/>
                        </div>
                        Adobe XD
                    </div>

    

                <hr />

                <div className="resume-skill-b">
                        <div className="resume-icon">
                            <GiIcons.GiPencilRuler/>
                        </div>
                        Creativity
                    </div>

                    <div className="resume-skill-b">
                        <div className="resume-icon">
                            <MdIcons.MdSpeakerNotes/>
                        </div>
                        Communication
                    </div>

                    <div className="resume-skill-b">
                        <div className="resume-icon">
                            <GiIcons.GiMagnifyingGlass/>
                        </div>
                        Problem solving
                    </div>

                    <div className="resume-skill-b">
                        <div className="resume-icon">
                            <MdIcons.MdThumbUp/>
                        </div>
                        Adaptability
                    </div>

                    <div className="resume-skill-b">
                        <div className="resume-icon">
                            <GiIcons.GiGlassHeart/>
                        </div>
                        Empathy
                    </div>

                    <div className="resume-skill-b">
                        <div className="resume-icon">
                            <FaIcons.FaPeopleCarry/>
                        </div>
                        Collaboration
                    </div>

                </div>

                <div className="resume-col-four">
                    <div className="resume-title-a">
                        <h1>&#60; Education /&#62;</h1>
                    </div>
                    <ul>
                        <li><span>Web Development</span><br/>
                        <em>Northampton College </em> 
                        <i>(Aug '17 to May '20)</i><br/><br/>
                        <strong>Associate of Applied Science (AAS) </strong>
                        <p>Frequent honoree of the Dean's List
                        </p>
                        </li>

                        <li><span>Radio / TV</span><br/>
                        <em>Northampton College </em> 
                        <i>(Aug '14 to May '16)</i><br/><br/>
                        <strong>No certification offered </strong>
                        <p>Frequent honoree of the Dean's List
                        </p>
                        </li>

                        <li><span>Esthetics</span><br/>
                        <em>B.A. Vocational-Technical School </em> 
                        <i>(Aug '12 to June '13)</i><br/><br/>
                        <strong>Esthetician license</strong>
                        <p>300 hours of training completed
                        </p>
                        </li>

                        <li><span>Fashion Industries</span><br/>
                        <em>B.A. Vocational-Technical School </em> 
                        <i>(Aug '10 to June '14)</i><br/><br/>
                        <strong>Program completed</strong>
                        <p>800-1100 hours of training completed
                        </p>
                        </li>

                        <li><span>High School</span><br/>
                        <em>Freedom High School </em> 
                        <i>(Aug '10 to June '14)</i><br/><br/>
                        <strong>Diploma received</strong>
                        <p>Frequent honoree of the honor roll
                        </p>
                        </li>

                    </ul>
                </div>

                <div className="resume-col-five">
                    <div className="resume-title-b">
                        <h1>&#60; Awards /&#62;</h1>
                    </div>
                    <div className="resume-skill-c">
                        <div className="resume-icon">
                            <GiIcons.GiTrophyCup/>
                        </div>
                        ADDY Awards 2020
                        <br/><i>(silver #1, won)</i>
                    </div>

                    <div className="resume-skill-c">
                        <div className="resume-icon">
                            <GiIcons.GiTrophyCup/>
                        </div>
                        ADDY Awards 2020
                        <br/><i>(silver #2, won)</i>
                    </div>

                    <div className="resume-skill-c">
                        <div className="resume-icon">
                            <GiIcons.GiTrophyCup/>
                        </div>
                        ADDY Awards 2020
                        <br/><i>(silver #3, won)</i>
                    </div>
                </div>

            </div>
            
        
        </div>
    )
}

export default Resume
