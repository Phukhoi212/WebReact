import { actions } from "./enums";

const initialState = {
  farmList: [],
  idOder: "",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_FARM:
      return { ...state, farmList: action.payload || [] };
    case actions.CREATE_ODER:
      return { ...state, idOder: action.payload }
    default:
      return state;
  }
};
