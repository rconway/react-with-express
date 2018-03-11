export const ACTIONS = {
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
  return function(dispatch, getState) {
    console.log("zzz actionFetchUsers zzz");
    fetch("/users")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function(users) {
        dispatch(actionSetUsers(users));
      });
  }
}

export function actionSubmitAddUser(user) {
  return function(dispatch, getState) {
    console.log("zzz actionAddUser zzz");
    fetch("/users/add", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
      })
      .then(function(newUser) {
        dispatch(actionAddUser(newUser));
      });
  }
}
