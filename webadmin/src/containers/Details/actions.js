import { actions } from "./enums";
import * as apis from "../../apis";

const PRODUCT_URL = "/products";

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