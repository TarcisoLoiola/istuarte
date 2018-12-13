import { createStore } from 'redux'

// import Agenda from '../utilities/api'

const Store = createStore((
    state = { 
        slide: false, 
        
    }, action ) => {

    if( action.type === 'SLIDE_US' ){
        state.slide = !action.value;
    }
    return state;
});



export default Store;