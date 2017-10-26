import * as types from './actionTypes';

export const updateListAction = () => ({
    type: types.UPDATE_LIST
});

export const updateListSuccessAction = (items) => ({
    type: types.UPDATE_LIST_SUCCESS,
    items
});

export const updateListFailedAction = (error) => ({
    type: types.UPDATE_LIST_FAILED,
    error
});

