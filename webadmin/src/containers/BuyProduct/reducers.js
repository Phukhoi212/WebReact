import { actions } from "./enums";

const initialState = {
  farmList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_FARM:
      return { ...state, farmList: action.payload || [] };
    default:
      return state;
  }
};
