import { all, takeLatest } from 'redux-saga/effects';

import { Types as BooksTypes } from '../ducks/books';
import { Types as BookDetailsTypes } from '../ducks/bookDetails';
import { Types as SearchTypes } from '../ducks/search';

import { getBooks, updateBookShelf } from './books';
import { getBookDetails } from './bookDetails';
import { searchBooks, resetSearch } from './search';

export default function* rootSaga() {
  yield all([
    takeLatest(BooksTypes.GET_BOOKS_REQUEST, getBooks),
    takeLatest(BooksTypes.UPDATE_BOOK_SHELF_REQUEST, updateBookShelf),
    takeLatest(BookDetailsTypes.GET_BOOK_DETAILS_REQUEST, getBookDetails),
    takeLatest(SearchTypes.SEARCH_BOOKS_REQUEST, searchBooks),
    takeLatest(SearchTypes.SEARCH_BOOKS_RESET_REQUEST, resetSearch)
  ]);
}
