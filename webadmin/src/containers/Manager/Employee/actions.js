import { actions } from "./enums";
import * as apis from "../../../apis";

const EMPLOYEES_URL = "/employees";

export const getListEmployee = () => async dispatch => {
  const response = await apis.get(EMPLOYEES_URL);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_EMPLOYEES,
      payload: response.data || [],
    });
  }
};

export const getEmployById = id => async dispatch => {
  const response = await apis.get(`${EMPLOYEES_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_EMPLOY_BY_ID,
      payload: response.data || {},
    });
  }
};

export const deleteAdminById = id => async dispatch => {
  const response = await apis.axiosDelete(`${EMPLOYEES_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch(getListEmployee());
  }
};

export const createAdmin = (admin, resetState) => async dispatch => {
  const response = await apis.post(EMPLOYEES_URL, admin);
  const { status } = response;
  if (status === 200) {
    if (typeof resetState === "function") resetState();
    dispatch({
      type: actions.CREATE_EMPLOYEE,
    })
    dispatch(getListEmployee());
  }
};

export const updateEmployById = (id, employ) => async dispatch => {
  const response = await apis.put(`${EMPLOYEES_URL}/${id}`, employ);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.UPDATE_EMPLOYEE,
      payload: response.data,
    })
    dispatch(getListEmployee());
  }
}