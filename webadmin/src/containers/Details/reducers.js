import { actions } from "./enums";

const initialState = {
  listProduct: [],
  product: {},
  comment: [],
  listCustomer: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_PRODUCT:
      return { ...state, listProduct: action.payload || [] };
    case actions.GET_PRODUCT_BY_ID:
      return { ...state, product: action.payload || {} };
    case actions.GET_COMMENT_FOR_PRODUCT:
      return { ...state, comment: action.payload }
    case actions.GET_LIST_CUSTOMER:
      return { ...state, listCustomer: action.payload }
    default:
      return state;
  }
};
