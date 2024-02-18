'use client'
import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid!';
    }
    if (!feedback.trim()) {
      errors.feedback = 'Feedback is required!';
    }

    // If there are errors, set them in state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If all fields are valid, proceed with form submission
    try {
      const response = await axios.post('http://127.0.0.1:8000/feedback/', {
        name,
        email,
        feedback,
      });

      console.log('Feedback submitted successfully:', response.data);
      setName('');
      setEmail('');
      setFeedback('');
      setErrors({});
      alert('Feedback submitted successfully!');
    
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
    }
  };

  return (
    <>
      <div className='background-container'>
        <div className='contact-us-container'>
          <h2>We'd love to hear from you!</h2>
          <form className='form-container' onSubmit={handleSubmit}>
            <div className='innerform-container'>
              <input
                type='text'
                placeholder='Name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className='error-message'>{errors.name}</p>}
              <input
                placeholder='Email'
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className='error-message'>{errors.email}</p>}
              <textarea
                placeholder='Feedback'
                id='feedback'
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              ></textarea>
              {errors.feedback && (
                <p className='error-message'>{errors.feedback}</p>
              )}
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
