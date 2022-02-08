const initialState = { }
const GroupReducer = (state = initialState, action) => {
  if (action.type == 'GET_GROUPS') {
    return action.payload
  }
    return state
}

export default GroupReducer
