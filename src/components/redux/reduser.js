import {CREATE_NEW_USER, DELETE_USER, USER_INFO} from './types'

const initialState = {
    items: []
}

const activeUser = {
    item: null
}

const reduserForActiveElem = (state = activeUser, action) => {
    switch (action.type) {
        case USER_INFO:
            return {...state, item: state.item.action.payload}
    
        default:
            return state;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:            
            return {...state, items: state.items.concat([action.payload])}
        
        case DELETE_USER:
            return {...state, items: state.items.filter((e)=>{
                return e.id != action.payload;
            })
        }
       

        default:
            return state;
    }
    
}

export {reducer, reduserForActiveElem}