import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { init } from 'emailjs-com';
import FullLogo from '../images/thelogo.png';
import ResumeHeader from "../images/floralhead.png";
init("user_pZvo8NpRhr3HgLXbkfSJ2");


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_gv0kj6a', 'orpheusdesigns_y7wjw4i', e.target, 'user_pZvo8NpRhr3HgLXbkfSJ2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  }

  return (
  
  <>
  <div className="contact-header">
  <div className="contact-tit"><img src={FullLogo}/>
  <h2>Get in touch! Shoot me an email &<br/>i'll get back to you within 48 hours.</h2></div>
</div>
      <div className="contactform">
          <div className="contact-right">
    <form className="contact-form" onSubmit={sendEmail}>
        <div className="formgroup">
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Jane Doe" required />
        </div>
        <div className="formgroup">
      <label>Pronouns</label>
      <input type="text" name="user_pronouns" placeholder="she/her" required />
        </div>
        <div className="formgroup">
      <label>Phone</label>
      <input type="text" name="user_phone" placeholder="555 555 5555" />
        </div>
        <div className="formgroup">
      <label>Email</label>
      <input type="text" name="user_email" placeholder="janedoe@gmail.com" required />
      </div>
      <div className="formgroup">
      <label>Subject</label>
      <input type="text" name="user_subject" placeholder="Subject" required />
      </div>
      <div className="formgroup">
      <label>Message</label>
      <textarea name="user_message" placeholder="Message" required />
      <button type="submit" value="Send!">Beam me up, Scotty!</button>
      </div>
    </form>
    
    </div>
    </div>
    </>
  );
}