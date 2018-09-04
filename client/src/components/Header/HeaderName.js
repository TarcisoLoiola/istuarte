import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderName extends Component{

    render(){
        return(
            <div className='ia-header-name-container-grid'>
                <header className='ia-header-name-container'>
                    <div><strong><Link to='/' className='ia-header-name-container-link'>ISTU ARTE</Link></strong></div>
                </header>
            </div>
        )
    }
}

export default HeaderName;