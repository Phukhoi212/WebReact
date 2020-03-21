import { actions } from "./enums";
import * as apis from "../../apis";

const EMPLOYEES_URL = "/admins";

export const getListEmployees = () => async dispatch => {
	const response = await apis.get(EMPLOYEES_URL);
	console.log("res", response);
	const { status } = response;
	if (status === 200) {
		dispatch({
			type: actions.GET_LIST_EMPLOYEE,
			payload: response.data || [],
		});
	}
};