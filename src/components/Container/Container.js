import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Team from '../Team/Team';
import Agenda from '../Agenda/Agenda';

// import Store from '../../store/Store';


class Container extends Component{

    render(){
        return(
            <section>
            <Header />
                <Route exact path='/' component={ Home } />
                <Route path='/team' component={ Team } />
                <Route path='/agenda' component={ Agenda } />
            </section>
        )
    }
}

export default Container;