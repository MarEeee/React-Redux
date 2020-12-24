import {combineReducers} from 'redux'
import {reducer} from './reduser'

export const rootReducer = combineReducers({
    items: reducer
})
