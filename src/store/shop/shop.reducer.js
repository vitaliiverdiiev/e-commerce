import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const handlers = {
  [ShopActionTypes.FETCH_COLLECTIONS_START]: (state, action) => ({
    ...state,
    isFetching: true,
  }),
  [ShopActionTypes.FETCH_COLLECTIONS_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    collections: action.payload,
  }),
  [ShopActionTypes.FETCH_COLLECTIONS_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    errorMessage: action.payload,
  }),
  [ShopActionTypes.UPDATE_COLLECTIONS]: (state, action) => ({
    ...state,
    collections: action.payload,
  }),
  DEFAULT: (state) => state,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default shopReducer;
