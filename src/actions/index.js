export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER"
  }
}

export const setSpecialText = (txt) => {
  return {
    type: "SET_SPECIAL_TEXT",
    value: txt
  }
}

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    value: user
  }
}

export const removeUser = () => {
  return {
    type: "REMOVE_USER"
  }
}