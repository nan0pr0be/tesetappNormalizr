import { all, fork, take, select } from 'redux-saga/effects';
import {updateFlow} from './listSaga';

export default function * startForman () {
    
      let listTask = yield fork(updateFlow)

    
     yield all([listTask])
    }
    
 