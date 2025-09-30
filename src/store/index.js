// import { createStore } from '../libs/redux';
import {legacy_createStore as createStore} from 'redux'
import rootReducer from './reducers';
const store = createStore(rootReducer);
window.store = store;
export default store