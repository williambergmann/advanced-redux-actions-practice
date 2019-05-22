
const currentCount = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
    
    case 'INCREASE_COUNTER':

    case default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':

    case 'REMOVE_USER':

    case default:
      return state
  }
}

const specialText = (state = "", action) => {
  switch (action.type) {
    case 'SET_SPECIAL_TEXT':
      return action.value
    case default:
      return state
  }
}
