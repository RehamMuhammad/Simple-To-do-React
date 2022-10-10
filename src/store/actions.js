import * as TYPES from './types'

export const createTask = (payload) => {
    return { type: TYPES.CREATE_TASK, payload };
};

export const deleteTask = (payload) => {
    return { type: TYPES.DELETE_TASK, payload };
};

export const updateTask = (payload) => {
    return { type: TYPES.UPDATE_TASK, payload };
};

export const toggleTask = (payload) => {
    return { type: TYPES.Toggle_TASK, payload };
};

