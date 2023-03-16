import { ITEMS_CHANGE_LOADING, ITEMS_FETCH_SUCCESS, ITEM_DETAIL_FETCH_SUCCESS } from "./actionType"
const baseUrl = 'http://localhost:3000/users/';

export const fetchItemsSuccess = (payload) => {
  return {
    type: ITEMS_FETCH_SUCCESS,
    payload
  }
}

export const fetchItemDetailSuccess = (payload) => {
  return {
    type: ITEM_DETAIL_FETCH_SUCCESS,
    payload
  }
}

export const loadingItems = (payload) => {
  return {
    type: ITEMS_CHANGE_LOADING,
    payload
  }
}

export const fetchItems = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingItems(true));
      let response = await fetch(baseUrl + 'items');
      if (!response.ok) throw await response.json();
      response = await response.json();
      dispatch(fetchItemsSuccess(response));
      dispatch(loadingItems(false));
    } catch (error) {
      throw error.message;
    }
  }
}

export const fetchItemDetail = (itemId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingItems(true));
      let response = await fetch(baseUrl + 'items/' + itemId);
      if (!response.ok) throw await response.json();
      response = await response.json();
      dispatch(fetchItemDetailSuccess(response));
      dispatch(loadingItems(false));
    } catch (error) {
      throw error.message;
    }
  }
}