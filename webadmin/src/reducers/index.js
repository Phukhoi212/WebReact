import { combineReducers } from 'redux';
import DashboardReducer from "../containers/DashBoard/reducers";
import AdminReducer from "../containers/Manager/Admin/reducers";
import Admin_LoginReducer from "../containers/Manager/Admin/Login/reducer";
import DetailReducer from "../containers/Details/reducers";
import HomeReducer from "../containers/Home/reducers";
import ShopDetailReducer from "../containers/ShopDetail/reducers";
import BuyProductReducer from "../containers/BuyProduct/reducers";
import SalePageReducer from "../containers/SalePage/reducers";
import Admin_ProductReducer from "../containers/Manager/Product/reducers";
import Admin_CategoryReducer from "../containers/Manager/Category/reducers";
import Admin_EmployReducer from "../containers/Manager/Employee/reducers";
import SessionReducer from "./SessionReducer";
import LoginReducer from "./LoginReducer";
import UserLoginReducer from "../containers/UserLogin/reducers";
import SessionUserReducer from "./SessionUserReducer";

const myReducer = combineReducers({
    DashboardReducer,
    AdminReducer,
    Admin_LoginReducer,
    DetailReducer,
    HomeReducer,
    SalePageReducer,
    ShopDetailReducer,
    BuyProductReducer,
    Admin_ProductReducer,
    Admin_CategoryReducer,
    Admin_EmployReducer,
    SessionReducer,
    LoginReducer,
    UserLoginReducer,
    SessionUserReducer
});
export default myReducer