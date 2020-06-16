import { actions } from "./enums";
import * as apis from "../../apis";

const PRODUCT_URL = "/products";
const SALES_PRODUCT_URL = "/list_ctkm";

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

export const getListProductBySearch = keyword => async dispatch => {
  const response = await apis.get(`${PRODUCT_URL}/search?q=${keyword}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_SEARCH_PRODUCT,
      payload: response.data || [],
    });
  }
};

export const updateActiePage = activePage => async dispatch => {
  dispatch({
    type: actions.UPDATE_ACTIVE_PAGE,
    payload: activePage,
  });
};

export const getListProductSale = () => async dispatch => {
  const response = await apis.get(SALES_PRODUCT_URL);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_SALES_PRODUCT,
      payload: response.data || [],
    });
  }
};