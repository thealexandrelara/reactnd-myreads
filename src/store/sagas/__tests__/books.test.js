import SagaTester from 'redux-saga-tester';
import rootSaga from '../index';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../services/api';

import {
  Types as BooksTypes,
  Creators as BooksActions
} from '../../ducks/books';

const apiMock = new MockAdapter(api);

describe('Saga Books', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  it('should be able to fetch books from API', async () => {
    const books = [{ id: '1' }];
    const response = {
      books
    };

    apiMock.onGet('/books').reply(200, response);

    sagaTester.dispatch(BooksActions.getBooksRequest());

    await sagaTester.waitFor(BooksTypes.GET_BOOKS_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      BooksActions.getBooksSuccess(books)
    );
  });

  it('should be handle errors on books fetch from API', async () => {
    const error = 'An error has occurred. Please, refresh the page.';
    apiMock.onGet('/books').reply(400);

    sagaTester.dispatch(BooksActions.getBooksRequest());

    await sagaTester.waitFor(BooksTypes.GET_BOOKS_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      BooksActions.getBooksError(error)
    );
  });

  it('should be able to update book shelf', async () => {
    const { id, shelf } = { id: '1', shelf: 'currentlyReading' };

    apiMock.onPut(`/books/${id}`, { shelf }).reply(200);

    sagaTester.dispatch(BooksActions.updateBookShelfRequest(id, shelf));

    await sagaTester.waitFor(BooksTypes.UPDATE_BOOK_SHELF_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      BooksActions.updateBookShelfSuccess(id, shelf)
    );
  });

  it('should be handle errors on moving books between shelves', async () => {
    const { id, shelf } = { id: '1', shelf: 'currentlyReading' };
    const error =
      'An error has occurred while updating book shelf. Please, try again.';

    apiMock.onPut(`/books/${id}`, { shelf }).reply(400);

    sagaTester.dispatch(BooksActions.updateBookShelfRequest(id, shelf));

    await sagaTester.waitFor(BooksTypes.UPDATE_BOOK_SHELF_ERROR);

    expect(sagaTester.getLatestCalledAction()).toEqual(
      BooksActions.updateBookShelfError(error)
    );
  });
});
