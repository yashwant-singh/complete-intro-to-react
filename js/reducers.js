import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: 'this is initial'
}

const setSearchTerm = (state, action) => {
  const newSate = {}
  Object.assign(newSate, state, { searchTerm: action.searchTerm })
  return newSate
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}
export default rootReducer
