import { combineReducers } from 'redux';
import userReducer from './userReducer';
import habitReducer from './habitReducer';

const state = {
    user: userReducer,
    habits: habitReducer
}

export default combineReducers(state)