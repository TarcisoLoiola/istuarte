import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OutlinedButton from '../GlobalComponents/OutlinedButton';
class ContactUs extends Component {

    render() {
        return (
            <div className='ia-contact-us'>
                <div className="ia-contact-us-container-grid">
                    <form action='submit' method='post'>
                        <div className='ia-contact-us-input'>
                            <label for='name'>Enter your name: </label>
                            <input type='text' name='name' id='name' required/>
                        </div>
                        <div className='ia-contact-us-input'>
                            <label for='email'>Enter your email: </label>
                            <input type='email' name='email' id='email' required/>
                        </div>
                        <div className='ia-contact-us-input'>
                            <OutlinedButton 
                                medium
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUs;