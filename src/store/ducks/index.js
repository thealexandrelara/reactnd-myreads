import { combineReducers } from 'redux';

import books from './books';
import bookDetails from './bookDetails';
import search from './search';

export default combineReducers({
  books,
  bookDetails,
  search
});
