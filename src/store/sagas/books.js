import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as BooksActions } from '../ducks/books';

export function* getBooks() {
  try {
    const response = yield call(api.get, '/books');
    console.log(response);

    yield put(BooksActions.getBooksSuccess(response.data.books));
  } catch (err) {
    yield put(
      BooksActions.getBooksError(
        'An error has occurred. Please, refresh the page.'
      )
    );
  }
}

export function* updateBookShelf(action) {
  try {
    const { id, shelf } = action.payload;
    yield call(api.put, `/books/${id}`, { shelf });

    yield put(BooksActions.updateBookShelfSuccess(id, shelf));
  } catch (err) {
    yield put(
      BooksActions.updateBookShelfError(
        'An error has occurred while updating book shelf. Please, try again.'
      )
    );
  }
}
