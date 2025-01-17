import { combineReducers } from 'redux';
import DashboardReducer from "../containers/DashBoard/reducers";
import AdminReducer from "../containers/Manager/Admin/reducers";
import LoginReducer from "../containers/Manager/Admin/Login/reducer";
import DetailReducer from "../containers/Details/reducers";
import HomeReducer from "../containers/Home/reducers";
import Admin_ProductReducer from "../containers/Manager/Product/reducers";
import Admin_CategoryReducer from "../containers/Manager/Category/reducers";

const myReducer = combineReducers({
    DashboardReducer,
    AdminReducer,
    LoginReducer,
    DetailReducer,
    HomeReducer,
    Admin_ProductReducer,
    Admin_CategoryReducer,
});
export default myReducer