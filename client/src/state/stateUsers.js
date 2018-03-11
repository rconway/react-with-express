import { ACTIONS } from "../actions/actions";

function sortUsers(users) {
  return users.slice().sort(function(a, b) {
    return b.age - a.age;
  });
}

export const reduceStateUsers = function(state = [], action) {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return sortUsers(action.payload);
    case ACTIONS.ADD_USER:
      var users = state.slice();
      users.push(action.payload);
      return sortUsers(users);
    default:
      return state;
  }
}
