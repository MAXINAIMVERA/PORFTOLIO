import React from 'react';
import '../styles/Footer.css'

import { useForm, ValidationError } from '@formspree/react';


const Footer = () => {
    const [state, handleSubmit] = useForm("xnqroron");

    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
    return(
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='email-submit'>
                        <label htmlFor="email" id='email-header'>
                            Your Email
                        </label>
                
                        <input
                        id="email"
                        type="email" 
                        name="email"
                        placeholder='e-mail'
                        />
                    </div>

                    
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />

                    <div className='text-submit'>
                        <label htmlFor="message" id='message-header'>
                            Write me!
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        />
                        <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting} id='submit-button'>
                            Submit
                        </button>
                    </div>
                    
                </form>
            </div>          
        );
}

export default Footer;