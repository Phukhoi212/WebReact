import { actions } from "./enums";

const initialState = {
  listFarm: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_FARM:
      return { ...state, listFarm: action.payload || [] };
    default:
      return state;
  }
};
