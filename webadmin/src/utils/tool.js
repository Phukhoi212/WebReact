export const STORE_KEYS = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  USER: "user",
  USER_ID: "userId",
  USER_TOKEN: "user_token",
  TOKEN: "token",
  ADMIN: "admin",
  ADMIN_ID: "adminId",
};

export const isEmpty = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return JSON.stringify(obj) === JSON.stringify({});
};

export const parseJson = (data, defaultValue) => {
  if (data === undefined || data === null) return defaultValue;
  let result = defaultValue;
  try {
    result = JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
  return result;
};

export const getSortedList = list => {
  let sortedList = list.slice(0);
  sortedList = sortedList.sort((a, b) => (a.label.toLowerCase() < b.label.toLowerCase() ? -1 : 1));
  return sortedList;
};

export const setLocalStorage = (key, value) => {
  if (!localStorage) return;
  localStorage.setItem(key, JSON.stringify({ value }));
};

/**
 * return an object value by specific key or default value
 * @param {string} key local storage key will be set
 * @param {object} defaultValue will be used when failed
 */
export const getLocalStorage = (key, defaultValue = undefined) => {
  if (!localStorage) return defaultValue;
  const dt = localStorage.getItem(key);
  // no storage found
  if (!dt) return defaultValue;
  const { value } = parseJson(dt, {});

  return value || defaultValue;
};

export const removeLocalStorage = key => {
  if (!localStorage) return;
  localStorage.removeItem(key);
};

export const format_curency = (money) => {
  money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return money;
};


