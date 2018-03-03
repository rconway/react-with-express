import { createStore } from "redux";
import { reduceStateUsers } from "./stateUsers";

// Root state reducer
const reduceState = function(state = {}, action) {
  return {
    users: reduceStateUsers(state.users, action)
  }
}

export const store = createStore(reduceState);

export default store;
