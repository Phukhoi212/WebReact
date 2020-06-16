import { actions } from "./enums";
import * as apis from "../../apis";

const FARM_URL = "/farms";

export const getListFarm = () => async dispatch => {
  const response = await apis.get(FARM_URL);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.GET_LIST_FARM,
      payload: response.data || [],
    });
  }
};