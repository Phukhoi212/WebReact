import { actions } from "./enums";
import * as apis from "../../apis";

const SALE_URL = "/list_ctkm";

export const getListSale = () => async dispatch => {
  const response = await apis.get(SALE_URL);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_PRODUCT_SALE,
      payload: response.data || [],
    });
  }
};

// export const getFarmShopById = id => async dispatch => {
//   const response = await apis.get(`${FARM_URL}/${id}`);
//   const { status } = response;
//   if(status === 200) {
//     dispatch({
//       type: actions.GET_FARM_INFO,
//       payload: response.data,
//     })
//   }
// }

export const updateActiePage = activePage => async dispatch => {
  dispatch({
    type: actions.UPDATE_ACTIVE_PAGE,
    payload: activePage,
  });
};