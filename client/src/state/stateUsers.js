import { ACTIONS } from "../actions/actions";

function sortUsers(users) {
  return users.slice().sort(function(a, b) {
    return b.age - a.age;
  });
}

export const reduceStateUsers = function(state = [], action) {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return sortUsers( action.users );
    case ACTIONS.ADD_USER:
      return sortUsers( action.users.slice().push(action.user) );
    default:
      return state;
  }
}
