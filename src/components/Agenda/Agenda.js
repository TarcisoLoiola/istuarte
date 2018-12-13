import React, { Component } from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

// import Schedule from '.././../utilities/agenda.json'

import AgendaStore from '../../store/AgendaStore';

class Agenda extends Component{
    constructor(props){
        super(props)
        this.state={
            date: moment(),
            agenda: {},
            professional: 'Tarciso'
        }
        this.handleChange=this.handleChange.bind(this)
        this.getSchedule=this.getSchedule.bind(this)
    }

    componentDidMount(){

        const storeState = AgendaStore.getState();
        this.setState({ agenda: storeState });
        AgendaStore.dispatch({ type: 'PROFESSIONAL', value: this.state.professional })
    }

    getSchedule(){
        let newState = this.state
        // let formatedDate = moment(newState.date).format("DD/MM/YYYY")
        let todays = []
        for(let i = 0; i < newState.schedule.length; i+=1 ){
            console.log(newState.schedule[i].date)
            console.log(newState.date)

            if(newState.schedule[i].date === newState.date){
                todays.push(newState.schedule[i])
            } 
        }
        console.log(todays)
    }
    

    handleChange(date){
        let newState = this.state
        newState.date = date
        this.setState( newState )
    }

    render(){
        // console.log(Schedule)
        return(
            <div className='ia-agenda'>
                Agenda
            </div>
        )
    }
}

export default Agenda;



// <DatePicker
// className='datePicker'
// dateFormat="DD/MM/YYYY"
// selected={this.state.date}
// onChange={this.handleChange} />


// <div>
// <label htmlFor='select'>Qual Servico Voce Deseja?</label>
// <select>
// <option>Quick Agenda - Somente um corte</option>
// <option>Custom - Corte e outros servicos</option>
// <option>Family Schedule - Escolha o numero de clients e profissionais</option>
// <option>Multiple Services</option>
// </select>
// </div>

// <input type='submit' onClick={this.getSchedule} />