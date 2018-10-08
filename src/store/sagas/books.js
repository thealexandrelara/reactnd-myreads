import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../../services/api';

import { Creators as BooksActions } from '../ducks/books';

export function* getBooks() {
  try {
    yield delay(5000);
    const response = yield call(api.get, '/books');
    console.log(response);

    yield put(BooksActions.getBooksSuccess(response.data.books));
  } catch (err) {
    console.log(err);
  }
}
