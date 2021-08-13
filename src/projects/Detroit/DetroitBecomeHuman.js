import React from 'react';
import DHeader from './videos/kara.mp4';
import Survey from './videos/withplaybutton.mp4';
import { Link } from 'react-router-dom';
import NaviLogo from './images/circle.png'
import Triangle from './images/triangle2.png'
import Kara from './images/karagif.gif';
import Chloe from './images/chloe.png';
import Markus from './images/markus.png';
import Connor from './images/connor.png';
import Game from './images/game.jpg';
import './DetroitBecomeHuman.css';

function ProjDetroitBecomeHuman() {
    return (
        <>

        <div className="det-navi-bar">
        <img src={NaviLogo} alt="logo" className="det-navi-logo"/> 
            <div className="det-navi-title">
            CYBER<b>LIFE</b>
            </div>
            <div className="det-navi-links">

                <a href="#det-first">Demo</a> <a href="#det-second">Company</a> <a href="#det-third">Androids</a> <a href="#det-fourth">Models</a> <a href="#det-fifth">Survey</a> <a href="#det-sixth">Purchase</a>
            </div>
        </div>

        <section id="det-first">
        <video
        autoPlay
        loop
        muted
        className="myVideo">
        <source src={DHeader} type="video/mp4"/>
        </video>
        </section>
        
        <section id="det-second">

            <div className="det-second-container">
                
                <div className="det-second-info">
                    <h1>CYBER<b>LIFE</b></h1>
                    <h2>The world's lead in android design.</h2>

                    <div className="det-sec-desc">
                    <img src={Triangle} alt="triangle"/>
                    <p>CyberLife is synonymous with extravagance. It's long since established itself as a force to be reckon with since its original launch in 2018. Founded in the resilient city of Detroit, Michigan by Elijah Kamski, a now world renowned scientist and philanthropist, CyberLife's goal was to improve the human experience.</p>

                    <p>Through the creation of Androids, this was more than achieved. And though the founder has since stepped down from the company, CyberLife continues to grow more and more each year. It has comfortably sat at the top of the technological food chain for the last twenty years.</p>
                    </div>
                </div>
            </div>

        </section>

        <section id="det-third">

            <div className="det-third-container">
                <div className="det-kara">

                    <img src={Kara} />

                    <div className="det-kara-desc">

                        <p><b>Androids</b> are synthetic beings that are able to closely mimic humans in behavior, appearance, and structure. Internally they feature biocomponents, sythetic organs, and Thirium 310 (what is often referred to as 'blue blood') that circulates energy and electronic information throughout the android body.</p>
                        <p>Their brains are highly advanced, giving them processing power to work like and interact with humans on an equal level (or arguably above). Each model of Android were built for a specific niche of functions, which means there is a perfect android out there for anyone, no matter what their needs or desires are.</p>

                    </div>
                    <div className="det-kara-title">
                    What <em>is</em> an <b>android</b>?
                    </div>
                </div>
                
            </div>
            
        </section>

        <section id="det-fourth">

            <div className="det-fourth-container">
                <div className="det-fourth-title">AVAILABLE <b>MODELS</b></div>

                <div className="det-android-contain">
                <div className="det-android-model">

                    <img src={Connor} />

                    <h2>RK800</h2>

                    <p>With its main function to assist law enforcement and engage in investigative work, the RK800 model includes a physical simulation software based on the analysis of elements of the crime scene. It can reconstruct past events by cross checking evidence and can analyze biological evidence by real time through direct sampling. This model is not currently available for public purchase.</p>

                    <center>Pictured above is <b>Connor</b>, owned by CyberLife and lent to Detroit city police.</center>

                </div>

                <div className="det-android-model">

                    <img src={Chloe} />

                    <h2>ST200</h2>

                    <p>Our personal assistant models are the first androids to have been perfected by the company. It can speak many languages and perform most tasks a human could accomplish but may not wish to. Doing housework, cooking, taking phone calls, returning emails, managing appointments, et al.</p>

                    <center>Pictured above is <b>Chloe</b>, owned by Elijah Kamski (the creator of androids).</center>

                </div>

                <div className="det-android-model">

                    <img src={Markus} />

                    <h2>RK200</h2>

                    <p>The domestic companion android is ideal for humans in need of a more hands-on caretaking. Its functions are geared towards caring for their owners, which include but are not limited to: administiring medication, assisting with all bathroom needs, and physical therapy.</p>

                    <center>Pictured above is <b>Markus</b>, owned by Carl Manfred (a famous local painter).</center>

                </div>

                </div>
            </div>

        </section>

        <section id="det-fifth">

            <div className="det-fifth-container">
                
                <div className="det-survey-contain">

                    <video controls className="surveyvid">
                    <source src={Survey} type="video/mp4"/>
                    </video>

                    <form id="quiz">
            						<ol>  
										<li>
                							<h3><b>01.</b> What technology do you most anticipate?</h3>
											
                    						<div>
												<input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" /><label for="question-1-answers-A">Androids</label>
											</div>
											
											<div>
												<input type="radio" name="question-1-answers" id="question-1-answers-B" value="B" /><label for="question-1-answers-B">Flying cars</label>
											</div>
                    
                    						<div>
												<input type="radio" name="question-1-answers" id="question-1-answers-C" value="C" /><label for="question-1-answers-C">Space tourism</label>
											</div>
                    
                    						<div>
												<input type="radio" name="question-1-answers" id="question-1-answers-D" value="D" /><label for="question-1-answers-D">Brain connected devices</label>
											</div>
                						</li>
										<li>
               	 							<h3><b>02.</b> Would you consider having a relationship with an android?</h3>
											
                    						<div>
												<input type="radio" name="question-5-answers" id="question-5-answers-A" value="A" /><label for="question-5-answers-A">Yes</label>
											</div>
											
											<div>
												<input type="radio" name="question-5-answers" id="question-5-answers-B" value="B" /><label for="question-5-answers-B">No</label>
											</div>
                    
                    						<div>
												<input type="radio" name="question-5-answers" id="question-5-answers-C" value="C" /><label for="question-5-answers-C">I don't know</label>
											</div>
                						</li>
										<li>
                							<h3><b>03.</b> Do you consider yourself dependent on technology?</h3>
											
                    						<div>
												<input type="radio" name="question-2-answers" id="question-2-answers-A" value="A" /><label for="question-2-answers-A">Yes</label>
											</div>
											
											<div>
												<input type="radio" name="question-2-answers" id="question-2-answers-B" value="B" /><label for="question-2-answers-B">No</label>
											</div>
                    
                    						<div>
												<input type="radio" name="question-2-answers" id="question-2-answers-C" value="C" /><label for="question-2-answers-C">I don't know</label>
											</div>
                						</li>
										<li>
                							<h3><b>04.</b> Do you think one day machines can develop consciousness?</h3>
											
                    						<div>
												<input type="radio" name="question-6-answers" id="question-6-answers-A" value="A" /><label for="question-6-answers-A">Yes</label>
											</div>
											
											<div>
												<input type="radio" name="question-6-answers" id="question-6-answers-B" value="B" /><label for="question-6-answers-B">No</label>
											</div>
                    
                    						<div>
												<input type="radio" name="question-6-answers" id="question-6-answers-C" value="C" /><label for="question-6-answers-C">I don't know</label>
											</div>
                						</li>
										<li>
                							<h3><b>05.</b> Would you let an android care for your children?</h3>
											
                    							<div>
													<input type="radio" name="question-3-answers" id="question-3-answers-A" value="A" /><label for="question-3-answers-A">Yes</label>
												</div>
											
												<div>
													<input type="radio" name="question-3-answers" id="question-3-answers-B" value="B" /><label for="question-3-answers-B">No</label>
												</div>
                    
                    							<div>
													<input type="radio" name="question-3-answers" id="question-3-answers-C" value="C" /><label for="question-3-answers-C">I don't know</label>
											</div>
                						</li>
										<li>
                							<h3><b>06.</b> Do you think technology could become a threat to mankind?</h3>
											
                    						<div>
												<input type="radio" name="question-7-answers" id="question-7-answers-A" value="A" /><label for="question-7-answers-A">Yes</label>
											</div>
											
											<div>
												<input type="radio" name="question-7-answers" id="question-7-answers-B" value="B" /><label for="question-7-answers-B">No</label>
											</div>
                    
                    						<div>
												<input type="radio" name="question-7-answers" id="question-7-answers-C" value="C" /><label for="question-7-answers-C">I don't know</label>
											</div>
                						</li>
										<li>
                							<h3><b>07.</b> If you needed emergency surgery, would you agree to be operated on by a machine?</h3>
											
                    						<div>
												<input type="radio" name="question-4-answers" id="question-4-answers-A" value="A" /><label for="question-4-answers-A">Yes</label>
											</div>
											
											<div>
												<input type="radio" name="question-4-answers" id="question-4-answers-B" value="B" /><label for="question-4-answers-B">No</label>
											</div>
                    
                    						<div>
												<input type="radio" name="question-4-answers" id="question-4-answers-C" value="C" /><label for="question-4-answers-C">I don't know</label>
											</div>
										</li>
									</ol>
								</form>
                </div>

            </div>

        </section>

        <section id="det-sixth">

<div className="det-sixth-container">
    
    <div className="det-purchase">

        <img src={Game} />

        <div className="det-purchase-desc">

            <h1>DETROIT:</h1>
            <h2>BECOME HUMAN</h2>

            <p>Walk the fine line that separates man from machine by inserting yourself into the immersive world created by QuanticDream. Available for Playstation 4 as of May 25th.</p>

            <div className="det-button" href="">STANDARD <span>$19.99 (USD) </span></div>
            <br/>
            <div className="det-button" href="">DELUXE <span>$29.99 (USD) </span></div>

        </div>

    </div>

</div>

</section>

        </>
    )
}

export default ProjDetroitBecomeHuman
