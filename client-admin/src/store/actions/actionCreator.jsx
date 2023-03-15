import { CATEGORIES_CHANGE_LOADING, CATEGORIES_FETCH_SUCCESS, ITEMS_CHANGE_LOADING, ITEMS_FETCH_SUCCESS } from "./actionType"

const fetchItems = (payload) => {
  return {
    type: ITEMS_FETCH_SUCCESS,
    payload
  }
}

const loadingItems = (payload) => {
  return {
    type: ITEMS_CHANGE_LOADING,
    payload
  }
}

const fetchCategories = (payload) => {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload
  }
}

const loadingCategories = (payload) => {
  return {
    type: CATEGORIES_CHANGE_LOADING,
    payload
  }
}

export { fetchItems, loadingItems, fetchCategories, loadingCategories }