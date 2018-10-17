export const Types = {
  GET_BOOK_DETAILS_REQUEST: 'bookDetails/GET_BOOK_DETAILS_REQUEST',
  GET_BOOK_DETAILS_SUCCESS: 'bookDetails/GET_BOOK_DETAILS_SUCCESS',
  GET_BOOK_DETAILS_ERROR: 'bookDetails/GET_BOOK_DETAILS_ERROR'
};

const INITIAL_STATE = {
  data: {},
  loading: false
};

export default function bookDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_BOOK_DETAILS_REQUEST:
      return { ...state, loading: true };
    case Types.GET_BOOK_DETAILS_SUCCESS:
      return { data: action.payload.book, loading: false };
    case Types.GET_BOOK_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export const Creators = {
  getBookDetailsRequest: id => ({
    type: Types.GET_BOOK_DETAILS_REQUEST,
    payload: { id }
  }),
  getBookDetailsSuccess: book => ({
    type: Types.GET_BOOK_DETAILS_SUCCESS,
    payload: { book }
  }),
  getBookDetailsError: error => ({
    type: Types.GET_BOOK_DETAILS_ERROR,
    payload: { error }
  })
};
