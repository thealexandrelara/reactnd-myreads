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

    yield put(SearchActions.searchBooksSuccess(response.data.books));
  } catch (err) {
    console.log(err);
  }
}
