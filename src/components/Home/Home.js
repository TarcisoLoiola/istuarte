import React, { Component } from 'react';
import Team from '../Team/Team'
import Calendar from '../Calendar/Calendar'
import Agenda from '../Agenda/Agenda'

class Home extends Component{

    componentDidMount(){
    }

    handleDatePicker(moment){

        // console.log(moment)
    }

    render(){

        return(
            <div className='ia-home'>
                <Team />

                <Calendar onClick={this.handleDatePicker}/>

                <Agenda />
            </div>
        )
    }
}

export default Home;