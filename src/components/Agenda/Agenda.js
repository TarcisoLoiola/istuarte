import React, { Component } from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

// import Schedule from '.././../utilities/agenda.json'

// import AgendaStore from '../../store/AgendaStore';

class Agenda extends Component {
    constructor(props){
        super(props),
        this.state = {
            date: moment(),
            agenda: [],
            // professional: 'Tarciso'
        }
    }
    

    componentDidMount() {

        // const storeState = AgendaStore.getState();
        // this.setState({ agenda: storeState });
        // AgendaStore.dispatch({ type: 'PROFESSIONAL', value: this.state.professional })
    }

    render() {
        // console.log(Schedule)
        return (
            <div className='ia-agenda'>
                    <div className='ia-agenda-time'>8:00</div>
                    <div className='ia-agenda-time'>8:40</div>
                    <div className='ia-agenda-time'>9:20</div>
                    <div className='ia-agenda-time'>10:00</div>
                    <div className='ia-agenda-time'>10:40</div>
                    <div className='ia-agenda-time'>11:20</div>
                    <div className='ia-agenda-time'>12:00</div>
                    <div className='ia-agenda-time'>12:40</div>
                    <div className='ia-agenda-time'>13:20</div>
                    <div className='ia-agenda-time'>14:00</div>
                    <div className='ia-agenda-time'>14:40</div>
                    <div className='ia-agenda-time'>15:20</div>
                    <div className='ia-agenda-time'>16:00</div>
                    <div className='ia-agenda-time'>16:40</div>
                    <div className='ia-agenda-time'>17:20</div>
                    <div className='ia-agenda-time'>18:00</div>
                    <div className='ia-agenda-time'>18:40</div>
                    <div className='ia-agenda-time'>19:20</div>
                    <div className='ia-agenda-time'>20:00</div>
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