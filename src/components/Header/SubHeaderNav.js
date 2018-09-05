import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Store from '../../store/Store';

class SubHeaderNav extends Component{

    state={};

    componentUpdate(){
        // const storeState = Store.getState();

        // this.setState( storeState );

        console.log( this.state );
    }
    
    render(){
        return(
            <div className='ia-subheadernav-container-grid'>
                <div></div>
                <div className='ia-subheadernav-menu-list home' ><Link to='/' >Home</Link></div>
                <div className='ia-subheadernav-menu-list team' ><Link to='/team' >Team</Link></div>
                <div className='ia-subheadernav-menu-list agenda' ><Link to='/agenda' >Agenda</Link></div>
                <div className='ia-subheadernav-menu-list about-us' ><Link to='/us' >About Us</Link></div>
                <div></div>
            </div>
        )
    }
}

export default SubHeaderNav;