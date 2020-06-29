import { actions } from "./enums";

const initialState = {
  employeeList: [],
  listBills: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_LIST_EMPLOYEE:
      return { ...state, employeeList: action.payload || [] };
    case actions.GET_LIST_BILLS:
      return { ...state, listBills: action.payload }
    default:
      return state;
  }
};
