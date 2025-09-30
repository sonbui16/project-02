import { combineReducers } from 'redux';
import productReducer from './productReducer';
const rootReducer = combineReducers({
    product123: productReducer,
})
export default rootReducer;