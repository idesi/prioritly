import {createStore} from 'redux';
import defaultData from './../api/data';
import appReducer from './Reducers'

export default createStore(appReducer, defaultData);
