export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER"
  }
}

export const decreaseCounter = () => {
  return {
    type: "DECREASE_COUNTER"
  }
}

export const setSpecialText = (text) => {
  return {
    type: "SET_SPECIAL_TEXT",
    value: text
  }
}

export const addUser = (user) => {
  console.log(user)
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

export const setSearchText = (text) => {
  return {
    type: "SET_SEARCH_TEXT",
    value: text
  }
}

export const setIsLoading = (isLoading) => {
  return {
    type: "SET_IS_LOADING",
    value: isLoading
  }
}

export const setTemp = (temp) => {
  return {
    type: "SET_TEMP",
    value: temp
  }
}

export const setCurrentCity = (city) => {
  return {
    type: "SET_CURRENT_CITY",
    value: city
  }
}

export const setVideoURL = (URL) => {
  return {
    type: "SET_VIDEO_URL",
    value: URL
  }
}

export const setCurrentUserSort = (sort) => {
  return {
    type: "SET_CURRENT_USER_SORT",
    value: sort
  }
}

export const setVideoScale = (scale) => {
  return {
    type: "SET_VIDEO_SCALE",
    value: scale
  }
}