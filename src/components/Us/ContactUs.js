import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import OutlinedButton from '../GlobalComponents/OutlinedButton';
import Input from '../GlobalComponents/Input';
import TextArea from '../GlobalComponents/TextArea';

class ContactUs extends Component {
    // constructor( props ) {
    //     super( props );
    // }

    render() {
        return (
            <div className="ia-contact-us-container-grid">
                <form action='submit' method='post'>
                    <Input
                    className='ia-contact-us-input name'
                    type= 'text'
                    label='Name'
                    htmlFor= 'name'
                    id= 'name'
                    />
                    <Input
                    className='ia-contact-us-input email'
                    type= 'email'
                    label='Email'
                    htmlFor= 'email'
                    id= 'email'
                    />
                    <TextArea
                    className='ia-contact-us-input textarea'
                    label= 'Comments & Sugestions'
                    />
                    <OutlinedButton
                    className='ia-contact-us-submit submit'
                    medium
                    mid
                    />
                </form>
                Click aqui em about us<div className='about-us' onClick= { this.props.onClick } >About Us</div>
            </div>
        )
    }
}

export default ContactUs;