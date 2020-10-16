import { combineReducers } from 'redux';
import todos from './todos';
import { todoSaga } from './todos';
import { all } from 'redux-saga/effects';
const rootReducer = combineReducers({
  todos
});

export default rootReducer;

export function* rootSaga() {
  yield all([todoSaga()]);
}
