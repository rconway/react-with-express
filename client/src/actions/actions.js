export const ACTIONS = {
  SET_USERS: "SET_USERS",
  ADD_USER: "ADD_USER"
}

export function actionSetUsers(users) {
  return {
    type: ACTIONS.SET_USERS,
    users
  };
}

export function actionAddUser(user) {
  return {
    type: ACTIONS.ADD_USER,
    user
  };
}
