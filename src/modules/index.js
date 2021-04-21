import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import postList, { postListSaga } from './postList';
import postWrite, { postWriteSaga } from './postWrite';

const rootReducer = combineReducers({
    sample,
    loading,
    postList,
    postWrite,
});

export function* rootSaga() {
    yield all([sampleSaga(), postListSaga(), postWriteSaga()]);
}

export default rootReducer;