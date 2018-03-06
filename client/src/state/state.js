import { createStore, applyMiddleware  } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";

import { reduceStateUsers } from "./stateUsers";

// Root state reducer
const reduceState = function(state = {}, action) {
  return {
    users: reduceStateUsers(state.users, action)
  }
}

// Redux Middleware
// redux-thunk   : for actions returning functions
// redux-promise : for actions returning promises as payload (FSA actions)

export const store = createStore( reduceState, applyMiddleware(reduxThunk, reduxPromise) );

export default store;
