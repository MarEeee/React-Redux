import {CREATE_NEW_USER} from './types'

const initialState = {
    items: []
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:            
            return {...state, items: state.items.concat(action.payload)}
    
        default:
            return state;
    }
    
}