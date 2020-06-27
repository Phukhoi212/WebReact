import { actions } from "./enums";

const initialState = {
  listSale: [],
  activePage: 1,
  farmInfo: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_PRODUCT_SALE:
      return { ...state, listSale: action.payload || [] };
    case actions.UPDATE_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case actions.GET_FARM_INFO:
      return { ...state, farmInfo: action.payload || {} }
    default:
      return state;
  }
};