import React from 'react'
import './Contact.css'
import email_icon from '../../assets/email.png';
import Phone_icon from '../../assets/phone.jpg';
import Location from '../../assets/location_icon.png';


const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message</h3>
            <p>Feel free to reach out through contact form or find our contactinformation below.
                Your feedback, question and suggestion are important to us as we strive to provide
                 exceptional service to our community.
            </p>
            <ul>
                <li><img src={email_icon} alt="" />rashidsabitina@gmailcom</li>
                <li><img src={Phone_icon} alt="" />+255 626075042</li>
                <li><img src={Location} alt="" /> Iyumbu street<br/>Dodoma,Tanzania</li>
            </ul>
        </div>
        <div className="contact-col">
          <form action="">
            <label>Your name</label>
            <input type="text" name='name' placeholder='enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' />
            <label>Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btnn'>Submit</button>
          </form>
        </div>
      
    </div>
  )
}

export default Contact
