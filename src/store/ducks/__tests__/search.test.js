import reducer, { Creators as SearchActions } from '../search';

const INITIAL_STATE = {
  books: [],
  loading: false,
  error: null
};

describe('Search books reducer', () => {
  it('should be able to query books', () => {
    const state = reducer(
      INITIAL_STATE,
      SearchActions.searchBooksRequest('react')
    );

    expect(state.loading).toBe(true);
  });

  it('should fetch results when user query for books', () => {
    const books = [{ id: 1 }, { id: 2 }];
    const state = reducer(
      INITIAL_STATE,
      SearchActions.searchBooksSuccess(books)
    );

    expect(state.books).toHaveLength(2);
  });

  it('should be able to handle error response when searching for books', () => {
    const error = 'failed';
    const state = reducer(INITIAL_STATE, SearchActions.searchBooksError(error));

    expect(state.error).toEqual(error);
  });

  it('should be successful reset state', () => {
    const state = reducer(
      INITIAL_STATE,
      SearchActions.searchBooksResetSuccess()
    );

    expect(state).toEqual(INITIAL_STATE);
  });
});
