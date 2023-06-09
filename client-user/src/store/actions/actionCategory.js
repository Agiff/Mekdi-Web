import { CATEGORIES_CHANGE_LOADING, CATEGORIES_FETCH_SUCCESS } from "./actionType";
import { baseUrl } from "../../config";

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

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(loadingCategories(true));
      const response = await fetch(baseUrl + 'categories', {
        headers: {
          access_token: localStorage.access_token
        }
      });
      if (!response.ok) throw await response.text();
      const categories = await response.json();
      dispatch(fetchCategoriesSuccess(categories));
      dispatch(loadingCategories(false));
      return categories;
    } catch (error) {
      throw error;
    }
  }
}

export const addCategory = (payload) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + 'categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.access_token
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

export const deleteCategory = (categoryId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + 'categories/' + categoryId, {
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
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

export const updateCategory = (payload, categoryId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseUrl + 'categories/' + categoryId, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          access_token: localStorage.access_token
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw await response.text();
      const updatedCategory = await response.json();
      dispatch(fetchCategories());
      return updatedCategory;
    } catch (error) {
      throw error;
    }
  }
}