import * as types from './../constants/authTypes';

const initialState = {
    users: [],
    user: {},
    _token: null,
};
const user = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
            return {
                ...state,
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                _token: action.data
            };
        default:
            return {
                ...state
            };
    }
};

export default user;
