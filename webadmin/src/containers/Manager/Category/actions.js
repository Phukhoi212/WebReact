import { actions } from "./enums";
import * as apis from "../../../apis";

const CATEGORY_URL = "/category";

export const getListCategory = () => async dispatch => {
  const response = await apis.get(CATEGORY_URL);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_CATEGORY,
      payload: response.data || [],
    });
  }
};

export const getCategoryById = id => async dispatch => {
  const response = await apis.get(`${CATEGORY_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_CATEGORY_BY_ID,
      payload: response.data || {},
    });
  }
};

export const createCategory = (category, resetState) => async dispatch => {
  const response = await apis.post(CATEGORY_URL, category);
  const { status } = response;
  if (status === 200) {
    if (typeof resetState === "function") resetState();
    dispatch(getListCategory());
  }
};

export const deleteCategoryById = id => async dispatch => {
  const response = await apis.axiosDelete(`${CATEGORY_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch(getListCategory());
  }
};