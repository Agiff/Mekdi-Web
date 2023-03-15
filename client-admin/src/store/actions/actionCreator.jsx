import { CATEGORIES_CHANGE_LOADING, CATEGORIES_FETCH_SUCCESS, ITEMS_CHANGE_LOADING, ITEMS_FETCH_SUCCESS } from "./actionType"

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

export const fetchCategoriesSuccess = (payload) => {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    payload
  }
}

export const loadingCategories = (payload) => {
  return {
    type: CATEGORIES_CHANGE_LOADING,
    payload
  }
}

export const fetchItems = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingItems(true));
      const response = await fetch('http://localhost:3000/items');
      if (!response.ok) throw await response.text();
      const items = await response.json();
      dispatch(fetchItemsSuccess(items));
      dispatch(loadingItems(false));
      return items;
    } catch (error) {
      console.log(error);
    }
  }
}

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingCategories(true));
      const response = await fetch('http://localhost:3000/categories');
      if (!response.ok) throw await response.text();
      const categories = await response.json();
      dispatch(fetchCategoriesSuccess(categories));
      dispatch(loadingCategories(false));
      return categories;
    } catch (error) {
      console.log(error);
    }
  }
}

export const addItem = (payload) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw await response.text();
      const createdItem = await response.json();
      dispatch(fetchItems());
      return createdItem;
    } catch (error) {
      throw error;
    }
  }
}

export const addCategory = (payload) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://localhost:3000/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw await response.text();
      const createdCategory = await response.json();
      dispatch(fetchCategories());
      return createdCategory;
    } catch (error) {
      throw error;
    }
  }
}

export const deleteItem = (itemId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://localhost:3000/items/' + itemId, {
        method: 'DELETE'
      });
      if (!response.ok) throw await response.text();
      const deletedItem = await response.json();
      dispatch(fetchItems());
      return deletedItem;
    } catch (error) {
      throw error;
    }
  }
}

export const deleteCategory = (categoryId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://localhost:3000/categories/' + categoryId, {
        method: 'DELETE'
      });
      if (!response.ok) throw await response.text();
      const deletedCategory = await response.json();
      dispatch(fetchCategories());
      return deletedCategory;
    } catch (error) {
      throw error;
    }
  }
}

export const updateItem = (payload, itemId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://localhost:3000/items/' + itemId, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw await response.text();
      const updatedItem = await response.json();
      dispatch(fetchItems());
      return updatedItem;
    } catch (error) {
      throw error;
    }
  }
}