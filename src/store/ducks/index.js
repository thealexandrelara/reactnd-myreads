import { combineReducers } from 'redux';

import books from './books';
import search from './search';

export default combineReducers({
  books,
  search
});
