import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar'

class Home extends Component{

    componentDidMount(){
        
    }

    render(){

        return(
            <div className='ia-home'>
                <Calendar />
            </div>
        )
    }
}

export default Home;