import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import loading from './loading';
import postList, { postListSaga } from './postList';
import postWrite, { postWriteSaga } from './postWrite';

const rootReducer = combineReducers({
    loading,
    postList,
    postWrite,
});

export function* rootSaga() {
    yield all([postListSaga(), postWriteSaga()]);
}

export default rootReducer;