export const recieveGengo = (data) => {
    return { 
        type: 'RECIEVE_GENGO',
        payload: { data: data }
    };
}

export const recieveOldGengos = (data) => {
    return { 
        type: 'RECIEVE_OLD_GENGOS',
        payload: { data: data }
    };
}