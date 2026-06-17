import {createStore} from 'redux';
import TodoReducer from "./todotask/TodoReducer";


const store = createStore(TodoReducer);

export default store;