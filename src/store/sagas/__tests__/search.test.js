import SagaTester from 'redux-saga-tester';
import rootSaga from '../index';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../services/api';

import {
  Types as SearchTypes,
  Creators as SearchActions
} from '../../ducks/search';

const apiMock = new MockAdapter(api);

describe('Search Saga', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it('should fetch results from API', async () => {
    const query = 'react';
    const books = [{ id: '1' }];
    const response = {
      books
    };

    apiMock.onPost('/search', { query }).reply(200, response);

    sagaTester.dispatch(SearchActions.searchBooksRequest(query));

    await sagaTester.waitFor(SearchTypes.SEARCH_BOOKS_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      SearchActions.searchBooksSuccess(books)
    );
  });

  it('should handle error from API', async () => {
    const query = 'asdf12';
    const error = 'No results found';
    const response = {
      error: 'empty query'
    };

    apiMock.onPost('/search', { query }).reply(400, response);

    sagaTester.dispatch(SearchActions.searchBooksRequest(query));

    await sagaTester.waitFor(SearchTypes.SEARCH_BOOKS_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      SearchActions.searchBooksError(error)
    );
  });

  it('should handle query error', async () => {
    const query = 'asfda3';
    const error = 'No results found';
    const response = {
      books: {
        error
      }
    };

    apiMock.onPost('/search', { query }).reply(200, response);

    sagaTester.dispatch(SearchActions.searchBooksRequest(query));

    await sagaTester.waitFor(SearchTypes.SEARCH_BOOKS_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      SearchActions.searchBooksError(error)
    );
  });

  it('should handle search reset', async () => {
    sagaTester.dispatch(SearchActions.searchBooksResetRequest());

    await sagaTester.waitFor(SearchTypes.SEARCH_BOOKS_RESET_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      SearchActions.searchBooksResetSuccess()
    );
  });
});
