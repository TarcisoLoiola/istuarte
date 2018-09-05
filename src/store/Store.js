import { createStore } from 'redux';

const Store = createStore((
    state = { slide: false, }, action ) => {

    if( action.type === 'SLIDE_US' ){
        state.slide = !action.value;
    }
    return state;
});



export default Store;