export const Types = {
  SEARCH_BOOKS_REQUEST: 'search/SEARCH_BOOKS_REQUEST',
  SEARCH_BOOKS_SUCCESS: 'search/SEARCH_BOOKS_SUCCESS'
};

const INITIAL_STATE = {
  books: [],
  loading: false
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEARCH_BOOKS_REQUEST:
      return { ...state, loading: true };
    case Types.SEARCH_BOOKS_SUCCESS:
      return { books: action.payload.books, loading: false };
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
  })
};
