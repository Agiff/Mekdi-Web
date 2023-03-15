import { CATEGORIES_CHANGE_LOADING, CATEGORIES_FETCH_SUCCESS, ITEMS_CHANGE_LOADING, ITEMS_FETCH_SUCCESS } from "../actions/actionType"

const initialState = { items: [], loading: true, categories: [] }

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload
      }
    case ITEMS_CHANGE_LOADING:
      return {
        ...state,
        loading: action.payload
      }
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

export default rootReducer;