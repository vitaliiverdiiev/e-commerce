const INITIAL_STATE = {
  currentUser: null,
};

const handlers = {
  SET_CURRENT_USER: (state, action) => ({
    ...state,
    currentUser: action.payload,
  }),
  DEFAULT: (state) => state,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

export default userReducer;
