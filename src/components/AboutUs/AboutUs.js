import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component{
    
    render(){
        return(
            <div className='ia-aboutus-container-grid'>
                About us
                <br/>
                <Link to='/about-us/contact-us'>Contact Us</Link>
            </div>
        )
    }
}

export default AboutUs;