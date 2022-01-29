import {combineReducers} from 'redux';
import changeTheNumber from './upDown';
import todos from './todoReducer';
const rootReducer = combineReducers({
  changeTheNumber,
  todos
})
export default rootReducer;