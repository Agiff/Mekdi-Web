import { CATEGORIES_CHANGE_LOADING, CATEGORIES_FETCH_SUCCESS } from "../actions/actionType"

const initialState = { loading: true, categories: [] }

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        categories: action.payload
      }
    case CATEGORIES_CHANGE_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export default categoryReducer;