const ENV = {
    LCL: {
        REACT_APP_API_SERVER: ''
    },

    DEV: {
        REACT_APP_API_SERVER: ''
    },

    STG: {
        REACT_APP_API_SERVER: ''
    },

    PRO: {
        REACT_APP_API_SERVER: ''
    }
};

const config = ENV[process.env.REACT_APP_STAGE || "LCL"];

const getEnv = (name, defaultValue) => {
    return process.env[name] || config[name] || defaultValue;
};

export {getEnv};
