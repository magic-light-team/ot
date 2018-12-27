import { combineReducers } from 'redux';
import MainReducer from './mainReducer';

export default combineReducers({
   state: MainReducer 
});