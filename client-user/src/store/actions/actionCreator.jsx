import { ITEMS_CHANGE_LOADING, ITEMS_FETCH_SUCCESS } from "./actionType"

export const fetchItemsSuccess = (payload) => {
  return {
    type: ITEMS_FETCH_SUCCESS,
    payload
  }
}

export const loadingItems = (payload) => {
  return {
    type: ITEMS_CHANGE_LOADING,
    payload
  }
}

export const fetchItems = (itemId) => {
  return async (dispatch, getState) => {
    try {
      let baseUrl = 'http://localhost:3000/items';
      if (itemId) baseUrl = baseUrl + '/' + itemId;
      dispatch(loadingItems(true));
      let response = await fetch(baseUrl);
      if (!response.ok) throw await response.text();
      response = await response.json();
      dispatch(fetchItemsSuccess(response));
      dispatch(loadingItems(false));
    } catch (error) {
      console.log(error);
    }
  }
}