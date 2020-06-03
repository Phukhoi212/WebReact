import { actions } from "./enums";

const initialState = {
  listProduct: [],
  searchResult: [],
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
    default:
      return state;
  }
};
