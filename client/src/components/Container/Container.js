import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Team from '../Team/Team';
import Calendar from '../Calendar/Calendar';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../AboutUs/ContactUs';


class Container extends Component{
    render(){
        return(
            <section>
            <Header /> 
                <Route exact path='/' component={ Home } />
                <Route path='/team' component={ Team } />
                <Route path='/calendar' component={ Calendar } />
                <Route path='/about-us' component={ AboutUs } />
                <Route path = '/about-us/contact-us' component = { ContactUs } />
            </section>
        )
    }
}

export default Container;