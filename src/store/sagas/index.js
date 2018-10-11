import { all, takeLatest } from 'redux-saga/effects';

import { Types as BooksTypes } from '../ducks/books';

import { getBooks, updateBookShelf } from './books';

export default function* rootSaga() {
  yield all([
    takeLatest(BooksTypes.GET_BOOKS_REQUEST, getBooks),
    takeLatest(BooksTypes.UPDATE_BOOK_SHELF_REQUEST, updateBookShelf)
  ]);
}
