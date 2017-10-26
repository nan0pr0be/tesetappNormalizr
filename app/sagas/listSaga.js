import * as types from '../actions/actionTypes';
import api from '../api/rest';
import tripNormalizr from '../normalizr/tripNormalizr'


import {updateListSuccessAction, updateListFailedAction} from '../actions/listAction'

import {take, put, call} from 'redux-saga/effects';

export function * updateFlow () {
    while (true) {
        const action = yield take(types.UPDATE_LIST);
        try {
            console.log('action', action);
            const result = yield call(api.updateList);
            const items = tripNormalizr(result);
            console.log('originalItems', result);
            console.log('normalizeditems', items);
            

            yield put(updateListSuccessAction(items));
        } catch (error) {
            yield put(updateListFailedAction(error));
        }
        
    }
}