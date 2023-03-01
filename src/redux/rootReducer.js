import todosReducer from '../redux/todos/reducer';
import filtersReducer from '../redux/filters/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
});

export default rootReducer;