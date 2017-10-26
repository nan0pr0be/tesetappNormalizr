import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    return {
      ...createStore(rootReducer,
        applyMiddleware(sagaMiddleware)),
      runSaga: sagaMiddleware.run(rootSaga)
    }
  }
  
  export default configureStore
  