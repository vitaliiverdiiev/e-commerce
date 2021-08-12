1. `npm i redux-thunk`

2. In store `import thunk from "redux-thunk"`

3. Add `thunk` to middleware array

4. Create 3 action types for async fetching data. Something like x_START, x_SUCCESS, x_FAILURE

5. Add to state `isFetching: false` and `errorMessage: undefiend`
