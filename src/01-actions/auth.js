import * as types from '../07-constants/authTypes';
import {updateStatus} from "../05-utils/commonData";
import Api from "../05-utils/api";
import {saveUserInfo, saveToken, removeUserInfo, removeToken} from "../05-utils/storage";

export const register = (name, pass) => {
    return (dispatch) => {
        dispatch(updateStatus(types.REGISTER_PROGRESS));
        Api.register(name, pass).then(data => {
            dispatch(updateStatus(types.REGISTER_SUCCESS, {userActive: data}));
        }).catch(err => {
            const message = err && err.message ? err.message : 'register error';
            alert(message);
            dispatch(updateStatus(types.REGISTER_FAILED, {error: err}));
        });
    };
};

export const login = (email, password) => {
    let user = {email, password};
    return dispatch => {
        dispatch(updateStatus(types.LOGIN_PROGRESS));
        // call API
        Api.login(email, password).then(data => {
            dispatch(updateStatus(types.LOGIN_SUCCESS, {userActive: user}));
            saveUserInfo(user);
            saveToken(data && data.accessToken);
        }).catch(err => {
            const message = err && err.message ? err.message : 'Login error';
            alert(message);
            dispatch(updateStatus(types.LOGIN_FAILED, {error: err}));
        });
    };
};

export const logout = () => {
    return dispatch => {
        removeUserInfo();
        removeToken();
        dispatch(updateStatus(types.LOGOUT));
    };
};
