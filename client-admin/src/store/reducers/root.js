import { combineReducers } from 'redux'
import categoryReducer from './categories';
import itemReducer from './items';

const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoryReducer
})

export default rootReducer;