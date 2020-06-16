import { actions } from "./enums";
import * as apis from "../../apis";

const PRODUCT_URL = "/products";
const COMMENT_URL = "/comment";
const CUSTOMER_URL = "/customers";

export const getListProduct = () => async dispatch => {
  const response = await apis.get(PRODUCT_URL);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_PRODUCT,
      payload: response.data || [],
    });
  }
};

export const getProductById = id => async dispatch => {
  const response = await apis.get(`${PRODUCT_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_PRODUCT_BY_ID,
      payload: response.data || {},
    });
  }
};

export const getCommentOfProduct = id => async dispatch => {
  const response = await apis.get(`${COMMENT_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_COMMENT_FOR_PRODUCT,
      payload: response.data || [],
    });
  }
};

export const getListCustormer = () => async dispatch => {
  const response = await apis.get(CUSTOMER_URL);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_CUSTOMER,
      payload: response.data || [],
    });
  }
};