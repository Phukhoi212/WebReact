import { actions } from "./enums";

const initialState = {
  listCategory: [],
  category: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_CATEGORY:
      return { ...state, listCategory: action.payload || [] };
    case actions.GET_CATEGORY_BY_ID:
      return { ...state, category: action.payload || {} }
    default:
      return state;
  }
};

