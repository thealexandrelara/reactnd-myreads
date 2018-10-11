import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../../services/api';

import { Creators as BooksActions } from '../ducks/books';

export function* getBooks() {
  try {
    const response = yield call(api.get, '/books');
    console.log(response);

    yield put(BooksActions.getBooksSuccess(response.data.books));
  } catch (err) {
    console.log(err);
  }
}

export function* updateBookShelf(action) {
  try {
    const { id, shelf } = action.payload;
    console.log(`id: ${id} -> shelf: ${shelf}`);
    const response = yield call(api.put, `/books/${id}`, { shelf });
    console.log(response);

    yield put(BooksActions.updateBookShelfSuccess(id, shelf));
  } catch (err) {
    console.log(err);
  }
}
