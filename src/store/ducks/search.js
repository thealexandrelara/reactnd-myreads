export const Types = {
  SEARCH_BOOKS_REQUEST: 'search/SEARCH_BOOKS_REQUEST',
  SEARCH_BOOKS_SUCCESS: 'search/SEARCH_BOOKS_SUCCESS',
  SEARCH_BOOKS_ERROR: 'search/SEARCH_BOOKS_ERROR',
  SEARCH_BOOKS_RESET_REQUEST: 'search/SEARCH_BOOKS_RESET_REQUEST',
  SEARCH_BOOKS_RESET_SUCCESS: 'search/SEARCH_BOOKS_RESET_SUCCESS'
};

const INITIAL_STATE = {
  books: [],
  loading: false,
  error: null
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_BOOKS_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.SEARCH_BOOKS_SUCCESS:
      return { books: action.payload.books, loading: false, error: null };
    case Types.SEARCH_BOOKS_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    case Types.SEARCH_BOOKS_RESET_SUCCESS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

export const Creators = {
  searchBooksRequest: query => ({
    type: Types.SEARCH_BOOKS_REQUEST,
    payload: { query }
  }),
  searchBooksSuccess: books => ({
    type: Types.SEARCH_BOOKS_SUCCESS,
    payload: { books }
  }),
  searchBooksError: error => ({
    type: Types.SEARCH_BOOKS_ERROR,
    payload: { error }
  }),
  searchBooksResetRequest: () => ({
    type: Types.SEARCH_BOOKS_RESET_REQUEST
  }),
  searchBooksResetSuccess: () => ({
    type: Types.SEARCH_BOOKS_RESET_SUCCESS
  })
};
