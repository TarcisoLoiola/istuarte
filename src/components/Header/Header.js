import React, { Component } from 'react';
import Logo from './Logo';
// import SubHeaderNav from './SubHeaderNav';


class Header extends Component{

    render(){
        return(
            <div className='ia-header'>
                
                <Logo/>
            </div>
        )
    }
}

export default Header;

//<SubHeaderNav/>