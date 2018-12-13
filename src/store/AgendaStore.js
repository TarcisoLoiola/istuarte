import { createStore } from 'redux'
import axios from 'axios'

// import Agenda from '../utilities/api'

const Agenda = createStore((
    state = { 
        agenda: {},
        professional: '' 
        
    }, action ) => {

    if( action.type === 'PROFESSIONAL' ){

        console.log(action.type)
        console.log(action.value)
        axios.get('http://localhost:3001/schedules')
            .then( response => console.log( response ))
            .catch( error => console.log( error ))

        return state;
    }
});



export default Agenda;