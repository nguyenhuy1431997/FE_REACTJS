import * as types from '../07-constants/authTypes';

const initialState = {
    users: [],
    user: {},
};
const user = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_PROGRESS:
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                status: action.type,
            };
        case types.REGISTER_FAILED:
            return {
                ...state,
                status: action.type,
                error: action.data.error,
            };
        default:
            return {
                ...state
            };
    }
};

export default user;
