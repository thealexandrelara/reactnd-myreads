import reducer, { Creators as BooksActions } from '../books';

const INITIAL_STATE = {
  data: [],
  loading: false
};

describe('Books Request Reducer', () => {
  it('should be able to request books', () => {
    const state = reducer(INITIAL_STATE, BooksActions.getBooksRequest());

    expect(state.loading).toBe(true);
  });

  it('should be able to handle request books success response', () => {
    const books = [{ id: 1 }];
    const state = reducer(INITIAL_STATE, BooksActions.getBooksSuccess(books));

    expect(state.data).toHaveLength(1);
  });

  it('should be able to handle request books error response', () => {
    const error = 'failed';
    const state = reducer(INITIAL_STATE, BooksActions.getBooksError(error));

    expect(state.error).toEqual(error);
  });

  it('should be able to handle request books error response', () => {
    const error = 'failed';
    const state = reducer(INITIAL_STATE, BooksActions.getBooksError(error));

    expect(state.error).toEqual(error);
  });
});

describe('Update Books Request Reducer', () => {
  it('should be able to request book shelf update', () => {
    const state = reducer(
      INITIAL_STATE,
      BooksActions.updateBookShelfRequest('1', 'read')
    );

    expect(state).toEqual(INITIAL_STATE);
  });

  it('should handle update book shelf error', () => {
    const state = reducer(
      INITIAL_STATE,
      BooksActions.updateBookShelfError('An error occurred.')
    );

    expect(state.error).toEqual('An error occurred.');
  });

  it('should receive previous state if no books are stored when asked to update book', () => {
    const { id, shelf } = { id: 1, shelf: 'read' };
    const state = reducer(
      INITIAL_STATE,
      BooksActions.updateBookShelfSuccess(id, shelf)
    );

    expect(state).toEqual(INITIAL_STATE);
  });

  it('should update correct book in state', () => {
    const { id, shelf } = { id: '2', shelf: 'read' };
    const books = [
      { id: '1', shelf: 'currentlyReading' },
      { id: '2', shelf: 'currentlyReading' }
    ];
    const state = reducer(
      { ...INITIAL_STATE, data: books },
      BooksActions.updateBookShelfSuccess(id, shelf)
    );

    expect(state.data[1]).toEqual({ id: '2', shelf: 'read' });
  });
});
