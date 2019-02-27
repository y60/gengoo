export const generate = () => {
    return { 
        type: 'GENERATE',
    };
}

export const changeName = (name) => {
    return { 
        type: 'CHANGE_NAME',
        payload: { name: name }
    };
}