import * as types from '../actions/actionTypes';
import {tripInitState} from './initialState';


export default function listReducer (state = tripInitState, action) {
    switch (action.type) {
        case types.UPDATE_LIST:
            return state.mergeDeep({loading: true});
            //return Object.assign({}, state, {loading: true});
        case types.UPDATE_LIST_SUCCESS:
            let finalState = state.mergeDeep({items: action.items, loading: false});
            console.log('action.items', action.items);
            console.log('finalState', finalState);
            return state.mergeDeep({items: action.items, loading: false});
            //return Object.assign({}, state, {items: action.items, loading: false});
        case types.UPDATE_LIST_FAILED:
            return state.mergeDeep({error: action.error, loading: false});
            //return Object.assign({}, state, {error: action.error, loading: false});
        default:
            return state;
    }
}