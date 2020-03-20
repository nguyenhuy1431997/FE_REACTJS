const USER_INFO = "USER_INFO";
const TOKEN = "TOKEN";

export const saveUserInfo = (user) => localStorage.setItem(USER_INFO, JSON.stringify(user));
export const getUserInfo = () => localStorage.getItem(USER_INFO);
export const removeUserInfo = () => localStorage.removeItem(USER_INFO);

export const saveToken = (token) => localStorage.setItem(TOKEN, token);
export const getToken = () => localStorage.getItem(TOKEN);
export const removeToken = () => localStorage.removeItem(TOKEN);

