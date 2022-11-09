import React from 'react';
import '../styles/Footer.css'
import inLogo from '../assets/linkedin-contact.png'
import githubLogo from '../assets/github-contact.png'

import { useForm, ValidationError } from '@formspree/react';


const Footer = () => {
    const [state, handleSubmit] = useForm("xnqroron");

    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
    return(
        <div>
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
                            Get in touch with me
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
                <div className='container-contacts'>
                    <a href=""><img src={inLogo} alt="linkedin" /></a> 
                    <a href=""><img src={githubLogo} alt="github" /></a>
                    <a href=""><button>Dowload CV</button></a> 
                </div> 
            </div>
            <div className='container-message'>
                        <p>Made with ❤️ From Argentina to the world!</p>
                </div>    
        </div>      
        );
}

export default Footer;