import {createStore, applyMiddleware} from 'redux';
import defaultData from './../api/data';
import appReducer from './Reducers';
import thunkMiddleware from 'redux-thunk';

export default createStore(appReducer, applyMiddleware(thunkMiddleware));
