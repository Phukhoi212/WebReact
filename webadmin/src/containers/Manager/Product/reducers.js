import { actions } from "./enums";

const initialState = {
  listProduct: [],
  product: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_PRODUCT:
      return { ...state, listProduct: action.payload || [] };
    case actions.GET_PRODUCT_BY_ID:
      return { ...state, product: action.payload || {} }
    default:
      return state;
  }
};

