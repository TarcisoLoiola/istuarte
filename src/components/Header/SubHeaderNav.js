import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubHeaderNav extends Component{
    
    render(){
        return(
            <div className='ia-subheadernav-container-grid'>
                <div></div>
                <div className='ia-subheadernav-menu-list home' ><Link to='/' >Home</Link></div>
                <div className='ia-subheadernav-menu-list team' ><Link to='/team' >Team</Link></div>
                <div className='ia-subheadernav-menu-list calendar' ><Link to='/calendar' >Calendar</Link></div>
                <div className='ia-subheadernav-menu-list about-us' ><Link to='/about-us' >About Us</Link></div>
                <div></div>
            </div>
        )
    }
}

export default SubHeaderNav;