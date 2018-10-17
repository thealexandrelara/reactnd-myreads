import SagaTester from 'redux-saga-tester';
import rootSaga from '../index';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../services/api';

import {
  Types as BookDetailsTypes,
  Creators as BookDetailsActions
} from '../../ducks/bookDetails';

const apiMock = new MockAdapter(api);

describe('Book Details Saga', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it('should fetch results from API', async () => {
    const id = 'reactbook';
    const book = { id: '1' };
    const response = {
      book
    };

    apiMock.onGet(`/books/${id}`).reply(200, response);

    sagaTester.dispatch(BookDetailsActions.getBookDetailsRequest(id));

    await sagaTester.waitFor(BookDetailsTypes.GET_BOOK_DETAILS_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      BookDetailsActions.getBookDetailsSuccess(book)
    );
  });

  it('should handle error from API', async () => {
    const id = 'reactbook';
    const error = 'An error has occurred. Please, go back or refresh the page.';

    apiMock.onGet(`/books/${id}`).reply(500);

    sagaTester.dispatch(BookDetailsActions.getBookDetailsRequest(id));

    await sagaTester.waitFor(BookDetailsTypes.GET_BOOK_DETAILS_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      BookDetailsActions.getBookDetailsError(error)
    );
  });
});
