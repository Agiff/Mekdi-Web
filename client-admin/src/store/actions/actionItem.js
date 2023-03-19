import { ITEMS_CHANGE_LOADING, ITEMS_FETCH_SUCCESS } from "./actionType";
import { baseUrl } from "../../config";

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
export const fetchItems = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingItems(true));
      const response = await fetch(baseUrl + 'items', {
        headers: {
          access_token: localStorage.access_token
        }
      });
      if (!response.ok) throw await response.json();
      const items = await response.json();
      dispatch(fetchItemsSuccess(items));
      dispatch(loadingItems(false));
      return items;
    } catch (error) {
      throw error;
    }
  }
}

export const addItem = (payload) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + 'items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw await response.json();
      const createdItem = await response.json();
      dispatch(fetchItems());
      return createdItem;
    } catch (error) {
      throw error;
    }
  }
}

export const deleteItem = (itemId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + 'items/' + itemId, {
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      });
      if (!response.ok) throw await response.json();
      const deletedItem = await response.json();
      dispatch(fetchItems());
      return deletedItem;
    } catch (error) {
      throw error;
    }
  }
}

export const updateItem = (payload, itemId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + 'items/' + itemId, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          access_token: localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw await response.json();
      const updatedItem = await response.json();
      dispatch(fetchItems());
      return updatedItem;
    } catch (error) {
      throw error;
    }
  }
}