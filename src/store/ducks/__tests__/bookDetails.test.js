import reducer, { Creators as BookDetailsActions } from '../bookDetails';

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: null
};

describe('Book details reducer', () => {
  it('should be able to request book', () => {
    const state = reducer(
      INITIAL_STATE,
      BookDetailsActions.getBookDetailsRequest('react')
    );

    expect(state.loading).toBe(true);
  });

  it('should fetch results when response is success', () => {
    const book = { id: 1 };
    const state = reducer(
      INITIAL_STATE,
      BookDetailsActions.getBookDetailsSuccess(book)
    );

    expect(state.data).toEqual(book);
  });

  it('should be able to handle error response when requesting for book details', () => {
    const error = 'failed';
    const state = reducer(
      INITIAL_STATE,
      BookDetailsActions.getBookDetailsError(error)
    );

    expect(state.error).toEqual(error);
  });
});
