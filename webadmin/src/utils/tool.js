// import { compile } from 'path-to-regexp';

// export const toPath = (pattern, data) => compile(pattern, { encode: encodeURIComponent })(data);
/**
 * return an object value by specific key or default value
 * @param {string} key local storage key will be set
 * @param {object} defaultValue will be used when failed
 */

export const STORE_KEYS = {
    ACCESS_TOKEN: "ACCESS_TOKEN",
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

export const getLocalStorage = (key, defaultValue = undefined) => {
    if (!localStorage) return defaultValue;
    const dt = localStorage.getItem(key);
    // no storage found
    if (!dt) return defaultValue;
    const { value } = parseJson(dt, {});

    return value || defaultValue;
};

export const setLocalStorage = (key, value) => {
    if (!localStorage) return;
    localStorage.setItem(key, JSON.stringify({ value }));
};

export const removeLocalStorage = key => {
    if (!localStorage) return;
    localStorage.removeItem(key);
};
