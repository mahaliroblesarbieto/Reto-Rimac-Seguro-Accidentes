import {combineReducers} from 'redux'
import {reducer as reducerForm} from 'redux-form';
import users from './users';

export default combineReducers({
    form: reducerForm,
    users,
})