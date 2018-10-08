export const Types = {
  GET_BOOKS_REQUEST: 'books/GET_BOOKS_REQUEST',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS'
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
      console.log('ACTION', action);
      return { data: action.payload.data, loading: false };
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
  })
};
