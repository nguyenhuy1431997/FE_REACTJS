import axios from 'axios';
import {getToken} from './storage';
import {getEnv} from "../env";

export const API_ENDPOINT = getEnv('REACT_APP_API_SERVER') + '/api';

const getParam = (method, data, token = null) => {
    return {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
    }
};

const handleError = (res) => {
    const error = res && res.error;
    if (error) {
        throw res
    }
    return res
};


export const request = async ({
                                  endpoint,
                                  method = 'GET',
                                  body,
                              }) => {
    const token = getToken();
    return axios(API_ENDPOINT + endpoint, getParam(method, body, token))
        .then(res => {
            try {
                return res;
            } catch (e) {
                throw e
            }
        })
        .then(data => handleError(data))
        .catch(error => {
            throw error
        })
};
