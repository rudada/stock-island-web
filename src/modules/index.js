import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import loading from './loading';
import postList, { postListSaga } from './postList';
import postRead, { postReadSaga } from './postRead';
import postWrite, { postWriteSaga } from './postWrite';
import searchPrice, {searchPriceSaga} from './searchPrice';

const rootReducer = combineReducers({
    loading,
    postList,
    postRead,
    postWrite,
    searchPrice,
});

export function* rootSaga() {
    yield all([postListSaga(), postReadSaga(), postWriteSaga(), searchPriceSaga()]);
}

export default rootReducer;