import { actions } from "./enums";

const initialState = {
  listProduct: [],
  product: {},
  comment: [],
  listCustomer: [],
  customer: {},
  isLoading: false,
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
    case actions.GET_CUSTOMER_BY_ID:
      return { ...state, customer: action.payload }
    case actions.RESET_COMMENT_LIST:
      return { ...state, comment: [] }
    case actions.PRE_FETCH:
      return { ...state, isLoading: true };
    case actions.POST_FETCH:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
