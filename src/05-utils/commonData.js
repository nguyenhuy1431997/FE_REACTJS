export const updateStatus = (status, statusInfo) => {
    return {
        type: status,
        data: statusInfo
    };
};
