import React from 'react'
import "./Contact.css";

function Contact(){

  return (
    <>
    <div className='background-container'>
    <div className='contact-us-container'>
      <h2>We'd love to hear from you!</h2>
    <div className='form-container'>
    <div className='innerform-container'>
      <input type = "text"
      placeholder='Name'
      id="name"
      required/>
          <input
          placeholder='Email'
            type="email"
            id="email"
            required
          />
          <textarea
          placeholder='Feedback'
            id="feedback"
            required
          ></textarea>
    </div>
    <button type="submit">Submit</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact;
