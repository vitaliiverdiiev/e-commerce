import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};

const handlers = {
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
