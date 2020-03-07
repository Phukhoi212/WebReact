import axios from "axios";
//import { removeLocalStorage, getLocalStorage, STORE_KEYS } from "./utils/tools";
import history from "../history";

//const REACT_APP_URL = process.env.REACT_APP_URL;

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
});

const DEFAULT_RESULT = { code: 100, message: undefined };

// check if access token is expired and
// Force logout and redirect to login page when hit error code 401
// const validateAccessToken = errorMessage => {
//   if (errorMessage === "Request failed with status code 401") {
//     removeLocalStorage(STORE_KEYS.ACCESS_TOKEN);
//     history.push("/login");
//   }
// };

// const post = async (URL, data) => {
//   const accessToken = getLocalStorage(STORE_KEYS.ACCESS_TOKEN, []);

//   let result = DEFAULT_RESULT;
//   try {
//     result = await axiosInstance.post(URL, data, {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });
//   } catch (error) {
//     console.log("post error:", error);
//     validateAccessToken(error.message);
//   }
//   return result;
// };

// const put = async (URL, data) => {
//   const accessToken = getLocalStorage(STORE_KEYS.ACCESS_TOKEN, []);

//   let result = DEFAULT_RESULT;
//   try {
//     result = await axiosInstance.put(URL, data, {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });
//   } catch (error) {
//     console.log("post error:", error);
//     validateAccessToken(error.message);
//   }
//   return result;
// };

const get = async (URL, params = {}) => {
  let result = DEFAULT_RESULT;
  try {
    result = await axiosInstance.get(URL, {
      params,
    });
  } catch (error) {
    console.log("get error:", error.message);
  }

  return result;
};

// const axiosDelete = async (URL, data = []) => {
//   const accessToken = getLocalStorage(STORE_KEYS.ACCESS_TOKEN, []);
//   let result = DEFAULT_RESULT;
//   try {
//     result = await axiosInstance.delete(URL, {
//       data,
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });
//   } catch (error) {
//     console.log("delete error:", error.message);
//     validateAccessToken(error.message);
//   }

//   return result;
// };

export { get };
