import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import languageReducer from './reducer';
const store=createStore(languageReducer,composeWithDevTools())
export default store;