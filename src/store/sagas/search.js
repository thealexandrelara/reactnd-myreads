import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import api from '../../services/api';

import { Creators as SearchActions } from '../ducks/search';

export function* searchBooks(action) {
  try {
    yield call(delay, 500);
    const response = yield call(api.post, `/search`, {
      query: action.payload.query
    });

    console.log(response.data.books);
    if (response.data.books.error) {
      yield put(SearchActions.searchBooksError('No results found'));
    } else {
      yield put(SearchActions.searchBooksSuccess(response.data.books));
    }
  } catch (err) {
    yield put(SearchActions.searchBooksError('No results found'));
  }
}

export function* resetSearch() {
  console.log('RESET SEARCH');
  yield put(SearchActions.searchBooksResetSuccess());
}
