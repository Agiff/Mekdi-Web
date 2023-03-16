import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;