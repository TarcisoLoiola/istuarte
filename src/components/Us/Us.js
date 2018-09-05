import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

import Store from '../../store/Store';

class Us extends Component {

    state = {
    }
    
    slide = () => {
        const storeState = Store.getState();
        this.setState( storeState );
        Store.dispatch({ type: 'SLIDE_US', value: this.state.slide })
    }

    render(){
        return(
            <div>
                <div className='ia-about-contact-grid'>
                    <div className={`ia-about-us slide-about-${ this.state.slide }`}>
                        <AboutUs 
                        onClick={ this.slide }
                        />
                    </div>
                    <div className={`ia-contact-us slide-contact-${this.state.slide}`}>
                        <ContactUs 
                        onClick = { this.slide }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Us;