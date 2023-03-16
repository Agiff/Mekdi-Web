import { ITEMS_CHANGE_LOADING, ITEMS_FETCH_SUCCESS } from "../actions/actionType"

const initialState = { items: [], loading: true }

function itemReducer(state = initialState, action) {
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
    default:
      return state
  }
}

export default itemReducer