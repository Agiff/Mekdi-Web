import { ITEMS_CHANGE_LOADING, ITEMS_FETCH_SUCCESS, ITEM_DETAIL_FETCH_SUCCESS } from "../actions/actionType"

const initialState = { items: [], itemDetail: {}, loading: true }

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
    case ITEM_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        itemDetail: action.payload
      }
    default:
      return state
  }
}

export default itemReducer