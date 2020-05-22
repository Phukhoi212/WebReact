import { combineReducers } from 'redux';
import DashboardReducer from "../containers/DashBoard/reducers";
import AdminReducer from "../containers/Manager/Admin/reducers";

const myReducer = combineReducers({
    DashboardReducer,
    AdminReducer,
});
export default myReducer