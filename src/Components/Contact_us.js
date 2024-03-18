import React from 'react'
import './Contact_us.css'

function Contact_us() {
  return (
    <div className='contact_us'>
      <div className='contact_us_left'>
        <h1>Contact Us</h1>
        <p>Need to get in touch with us?</p>
        <p>Fill out this form with your query.</p>
      </div>
      <div className='contact_us_right'>
        <form className="contact-form">
            <div class="contact-form-group">
            <textarea className='contact-message' id="message" placeholder='Message' name="message" cols='50' rows='8' required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact_us
