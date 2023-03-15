import { legacy_createStore as createStore } from 'redux'

const initialState = { items: [], loading: true, categories: [] }

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case 'items/fetchSuccess':
      return {
        ...state,
        items: action.payload
      }
    case 'items/changeLoading':
      return {
        ...state,
        loading: action.payload
      }
    case 'categories/fetchSuccess':
      return {
        ...state,
        categories: action.payload
      }
    case 'categories/changeLoading':
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

let store = createStore(globalReducer)

store.subscribe(() => console.log(store.getState()))

export default store