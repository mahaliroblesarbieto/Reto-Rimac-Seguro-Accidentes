import {createStore, compose,applyMiddleware} from 'redux'
import reducers from '../reducers';
import thunk from 'redux-thunk';

const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers,initialState,composeEnhancers(
    applyMiddleware(thunk)
))