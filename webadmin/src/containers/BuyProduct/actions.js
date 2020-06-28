import { actions } from "./enums";
import * as apis from "../../apis";

const FARM_URL = "/farms";
const ODER_URL = "/oder";
const ODER_DETAIL_URL = "/oder_detail";

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

export const createOder = (oder) => async dispatch => {
  const response = await apis.post(ODER_URL, oder);
  const { status } = response;
  if (status === 200) {
    dispatch({
      type: actions.CREATE_ODER,
      payload: response.data.idCreate,
    })
  }
}

export const addDataForOderDetail = detail => async dispatch => {
  const response = await apis.post(ODER_DETAIL_URL, detail);
  const { status } = response;
  if (status === 200){
    dispatch({
      type: actions.ADD_DATA_FOR_DETAIL
    })
  }
}