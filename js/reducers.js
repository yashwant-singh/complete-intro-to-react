import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const addOMDBData = (state, action) => {
  // { type: ADD_OMDB_DATA, omdbData: {...}, imdbID: 'tt12345'}
  // { 'tt12345': {...} }
  const newOMDBData = {}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})
  // squire bracket means key here what ever comming from action.imdbID
  const newState = {}
  Object.assign(newState, state, {omdbData: newOMDBData})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case ADD_OMDB_DATA:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
