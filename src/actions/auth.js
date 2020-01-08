import * as types from './../constants/authTypes';
import axios from 'axios';

export const register = (name, pass) => {
    console.log(name, pass);
    return async (dispatch) => {
        dispatch(() => {
            return {
                type: types.REGISTER_REQUEST,
            }
        });
        const res = await axios.post('http://localhost:3010/api/v1/auth/register', {
            username: name,
            password: pass
        });
        if (res.data.success) {
            dispatch(registerSuccess(res.data.result.token))
        } else {
            dispatch(registerFail(res.data.error));
        }
    }
};

export const registerSuccess = (data) => {
    return {
        type: types.REGISTER_SUCCESS,
        data
    }
};

export const registerFail = (data) => {
    return {
        type: types.REGISTER_FAIL,
        data
    }
};

export const getUser = (token) => {
    return (dispatch) => {
        dispatch(() => {
            return {
                // type: types.GET_USER_REQUEST,
            }
        });
        return axios.get('http://localhost:3010/api/v1/users/me', {
                headers: {
                    Authorization: token
                }
            }
        )
            .then(res => {
                if (res.data.success) {
                    dispatch(getUserSuccess(res.data))
                } else {
                    dispatch(getUserFail(res.data.error));
                }
            })
            .catch(err => console.log(err))
    }
};

export const getUserSuccess = (data) => {
    return {
        // type: types.GET_USER_SUCCESS,
        data
    }
};

export const getUserFail = (data) => {
    return {
        // type: types.GET_USER_FAIL,
        data
    }
};

export const login = (name, pass) => {
    return async (dispatch) => {
        dispatch(() => {
            return {
                // type: types.LOGIN_REQUEST,
            }
        });
        const res = await axios.post('http://localhost:3010/api/v1/auth/login', {
            username: name,
            password: pass
        });
        if (res.data.success) {
            dispatch(loginSuccess(res.data.result.token));
            await dispatch(getUser(res.data.result.token));
        } else {
            dispatch(loginFail(res.data.error));
        }
    }
};

export const loginSuccess = (data) => {
    return {
        // type: types.LOGIN_SUCCESS,
        data
    }
};

export const loginFail = (data) => {
    return {
        // type: types.LOGIN_FAIL,
        data
    }
};

export const logOut = (value, username, password) => {
    return async (dispatch) => {
        dispatch(() => {
            return {
                // type: types.LOGIN_REQUEST,
            }
        });
        const res = await axios.post('http://localhost:3010/api/v1/auth/logout',
            {
                username: username,
                password: password,
            },
            {
                headers: {
                    Authorization: value
                }
            },
        );
        if (res) {
            console.log(res);
            dispatch(logOutSuccess());
            // await dispatch(getUser(res.data.result.token));
        } else {
            dispatch(logOutFail(res.data.error));
        }
    }
};

export const logOutSuccess = (data) => {
    return {
        // type: types.LOGOUT_SUCCESS,
        data
    }
};

export const logOutFail = (data) => {
    return {
        // type: types.LOGIN_FAIL,
        data
    }
};
