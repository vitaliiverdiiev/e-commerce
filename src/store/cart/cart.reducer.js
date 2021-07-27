import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "../action.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
  [REMOVE_ITEM]: (state, action) => ({
    ...state,
    cartItems: removeItemFromCart(state.cartItems, action.payload),
  }),
  [CLEAR_ITEM_FROM_CART]: (state, action) => ({
    ...state,
    cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
  }),
  DEFAULT: (state) => state,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default cartReducer;
