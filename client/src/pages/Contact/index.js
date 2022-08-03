import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='' id="contact-form">
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div id="contact-info">
        <div className=''>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className=''>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        </div>
        <div className='' id="contact-message">
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div className=''>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className='' id="contact-btn" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;