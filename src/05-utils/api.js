import {request} from './apiConfig'

const login = (email, password) => {
    return request({
        endpoint: '/auth/login',
        method: 'POST',
        body: {email, password},
    })
};

const register = (email, password) => {
    return request({
        endpoint: '/users',
        method: 'POST',
        body: {email, password},
    })
};

export default {
    login,
    register,
}
