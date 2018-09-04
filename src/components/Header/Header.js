import React, { Component } from 'react';
import HeaderName from './HeaderName';
import SubHeaderNav from './SubHeaderNav';


class Header extends Component{

    render(){
        return(
            <div className='ia-header'>
                <HeaderName/>
                <SubHeaderNav/>
                <hr/>
            </div>
        )
    }
}

export default Header;