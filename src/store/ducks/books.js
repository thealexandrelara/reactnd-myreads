export const Types = {
  GET_BOOKS_REQUEST: 'books/GET_BOOKS_REQUEST',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',
  GET_BOOKS_ERROR: 'books/GET_BOOKS_ERROR',
  UPDATE_BOOK_SHELF_REQUEST: 'books/UPDATE_BOOK_SHELF_REQUEST',
  UPDATE_BOOK_SHELF_SUCCESS: 'books/UPDATE_BOOK_SHELF_SUCCESS',
  UPDATE_BOOK_SHELF_ERROR: 'books/UPDATE_BOOK_SHELF_ERROR'
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_BOOKS_REQUEST:
      return { ...state, loading: true };
    case Types.GET_BOOKS_SUCCESS:
      return { data: action.payload.data, loading: false };
    case Types.GET_BOOKS_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case Types.UPDATE_BOOK_SHELF_REQUEST:
      return { ...state };
    case Types.UPDATE_BOOK_SHELF_SUCCESS:
      const { data } = state;
      const index = data.findIndex(book => book.id === action.payload.id);

      if (index !== -1) {
        data[index].shelf = action.payload.shelf;
        return { ...state, data, loading: false };
      }

      return { ...state, loading: false };
    case Types.UPDATE_BOOK_SHELF_ERROR:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
}

export const Creators = {
  getBooksRequest: () => ({
    type: Types.GET_BOOKS_REQUEST
  }),
  getBooksSuccess: data => ({
    type: Types.GET_BOOKS_SUCCESS,
    payload: { data }
  }),
  getBooksError: error => ({
    type: Types.GET_BOOKS_ERROR,
    payload: { error }
  }),
  updateBookShelfRequest: (id, shelf) => ({
    type: Types.UPDATE_BOOK_SHELF_REQUEST,
    payload: { id, shelf }
  }),
  updateBookShelfSuccess: (id, shelf) => ({
    type: Types.UPDATE_BOOK_SHELF_SUCCESS,
    payload: { id, shelf }
  }),
  updateBookShelfError: error => ({
    type: Types.UPDATE_BOOK_SHELF_ERROR,
    payload: { error }
  })
};
