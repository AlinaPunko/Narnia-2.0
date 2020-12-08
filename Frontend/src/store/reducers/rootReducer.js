import { combineReducers } from 'redux';

import books from './booksReducer';
import filter from './filterReducer';
import sorting from './sortingReducer';

export default combineReducers({
    books,
    filter,
    sorting
});
