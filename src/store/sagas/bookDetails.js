import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as BookDetailsActions } from '../ducks/bookDetails';

export function* getBookDetails(action) {
  try {
    const response = yield call(api.get, `/books/${action.payload.id}`);

    console.log(response);

    yield put(BookDetailsActions.getBookDetailsSuccess(response.data.book));
  } catch (err) {
    yield put(
      BookDetailsActions.getBookDetailsError(
        'An error has occurred. Please, go back or refresh the page.'
      )
    );
  }
}
