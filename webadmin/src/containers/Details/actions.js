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
  dispatch({
    type: actions.PRE_FETCH,
  });
  const response = await apis.get(`${PRODUCT_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_PRODUCT_BY_ID,
      payload: response.data || {},
    });
  }
  dispatch({
    type: actions.POST_FETCH,
  });
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

export const getCustormerById = (id) => async dispatch => {
  const response = await apis.get(`${CUSTOMER_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_CUSTOMER_BY_ID,
      payload: response.data || {},
    });
  }
};

export const sendComment = (description, date_comment, product_id, customer_id, id) => async dispatch => {
  const response = await apis.post(COMMENT_URL, {
    description,
    date_comment,
    product_id,
    customer_id
  });
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.ADD_COMMENT,
    });
    dispatch(getCommentOfProduct(id))
  }
};

export const resetCommentList = () => async dispatch => {
  dispatch({
    type: actions.RESET_COMMENT_LIST
  });
};

export const updateAddToCard = product => async dispatch => {
  dispatch({
    type: actions.ADD_TO_CARD,
    payload: product
  });
};