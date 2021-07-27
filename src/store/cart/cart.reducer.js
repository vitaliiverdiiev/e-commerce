import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const handlers = {
  [CartActionTypes.TOGGLE_CART_HIDDEN]: (state, action) => ({
    ...state,
    hidden: !state.hidden,
  }),
  DEFAULT: (state) => state,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default cartReducer;
