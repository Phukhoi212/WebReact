import { actions } from "./enums";
import * as apis from "../../apis";

const PRODUCT_URL = "/farm/products";
const FARM_URL = "/farms";

export const getListProduct = (id) => async dispatch => {
  const response = await apis.get(`${PRODUCT_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_PRODUCT,
      payload: response.data || [],
    });
  }
};

export const getFarmShopById = id => async dispatch => {
  const response = await apis.get(`${FARM_URL}/${id}`);
  const { status } = response;
  if(status === 200) {
    dispatch({
      type: actions.GET_FARM_INFO,
      payload: response.data,
    })
  }
}

export const updateActiePage = activePage => async dispatch => {
  dispatch({
    type: actions.UPDATE_ACTIVE_PAGE,
    payload: activePage,
  });
};