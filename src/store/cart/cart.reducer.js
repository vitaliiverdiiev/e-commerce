import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../action.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const handlers = {
  [TOGGLE_CART_HIDDEN]: (state, action) => ({
    ...state,
    hidden: !state.hidden,
  }),
  [ADD_ITEM]: (state, action) => ({
    ...state,
    cartItems: addItemToCart(state.cartItems, action.payload),
  }),
  DEFAULT: (state) => state,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default cartReducer;
