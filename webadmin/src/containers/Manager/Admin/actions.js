import { actions } from "./enums";
import * as apis from "../../../apis";

const ADMIN_URL = "/admins";

export const getListAdmin = () => async dispatch => {
  const response = await apis.get(ADMIN_URL);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_ADMIN,
      payload: response.data || [],
    });
  }
};

export const getAdminById = id => async dispatch => {
  const response = await apis.get(`${ADMIN_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_ADMIN_BY_ID,
      payload: response.data || {},
    });
  }
};

export const deleteAdminById = id => async dispatch => {
  const response = await apis.axiosDelete(`${ADMIN_URL}/${id}`);
  const { status } = response;
  if (status === 200) {
    dispatch(getListAdmin());
  }
};

export const createAdmin = (admin, resetState) => async dispatch => {
  const response = await apis.post(ADMIN_URL, admin);
  const { status } = response;
  if (status === 200) {
    if (typeof resetState === "function") resetState();
    dispatch({
      type: actions.CREATE_ADMIN,
    })
    dispatch(getListAdmin());
  }
};

export const updateAdminById = (id, admin) => async dispatch => {
  const response = await apis.put(`${ADMIN_URL}/${id}`, admin);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.UPDATE_ADMIN,
      payload: response.data,
    })
    dispatch(getListAdmin());
  }
}