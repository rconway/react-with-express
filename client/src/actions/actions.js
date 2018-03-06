export const ACTIONS = {
  FETCH_USERS: "FETCH_USERS",
  SET_USERS: "SET_USERS",
  ADD_USER: "ADD_USER"
}

export function actionSetUsers(users) {
  return {
    type: ACTIONS.SET_USERS,
    payload: users
  };
}

export function actionAddUser(user) {
  return {
    type: ACTIONS.ADD_USER,
    payload: user
  };
}

export function actionFetchUsers() {
  /* global fetch */
  // async fetch with Promise
  var userFetchPromise = fetch("/users")
    .then(function(response) {
      return response.json();
    });
    // FSA action with Promise as payload
  return {
    type: ACTIONS.FETCH_USERS,
    payload: userFetchPromise
  };
}
