import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import createSagaMiddleware from 'redux-saga'


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
  // run rootSaga to handle side effects 
  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore