import { actions } from "./enums";
import * as apis from "../../apis";

const EMPLOYEES_URL = "/admins";
const ODER_URL = "/oder";

export const getListEmployees = () => async dispatch => {
	const response = await apis.get(EMPLOYEES_URL);
	const { status } = response;
	if (status === 200) {
		dispatch({
			type: actions.GET_LIST_EMPLOYEE,
			payload: response.data || [],
		});
	}
};

export const getListBills = () => async dispatch => {
	const response = await apis.get(ODER_URL);
	const { status } = response;
	if (status === 200) {
		dispatch({
			type: actions.GET_LIST_BILLS,
			payload: response.data || [],
		});
	}
};