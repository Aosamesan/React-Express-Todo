import { createStore, combineReducers } from 'redux'
import { INITIAL_STATE } from '../constants/state'
import { todos, loading } from './reducers'

export const store = createStore(combineReducers({todos, loading}), INITIAL_STATE)