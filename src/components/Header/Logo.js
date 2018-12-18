import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderName extends Component{

    render(){
        return(
            <div className='ia-logo-container-grid'>
                <header className='ia-logo-container'>
                    <h1><Link to='/' className='ia-logo-container-link'>ISTU ARTE</Link></h1>
                    <hr/>
                </header>
            </div>
        )
    }
}

export default HeaderName;