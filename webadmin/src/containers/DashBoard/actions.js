import { actions } from "./enums";
import * as apis from "../../apis";

const USER_URL = "/list";

export const getListUser = () => async (dispatch, getState) => {
	const response = await apis.get(USER_URL);
	console.log("res", response);
	if (response) {
		dispatch({
			type: actions.GET_LIST_USER,
		});
	}
};