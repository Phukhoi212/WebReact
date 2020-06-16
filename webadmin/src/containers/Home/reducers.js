import { actions } from "./enums";

const initialState = {
  listProduct: [],
  searchResult: [],
  listSales: [],
  activePage: 1,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_PRODUCT:
      return { ...state, listProduct: action.payload || [] };
    case actions.GET_LIST_SEARCH_PRODUCT:
      return { ...state, searchResult: action.payload || [] };
    case actions.UPDATE_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case actions.GET_LIST_SALES_PRODUCT:
      return { ...state, listSales: action.payload };
    default:
      return state;
  }
};
