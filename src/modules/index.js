import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import loading from './loading';
import postList, { postListSaga } from './postList';
import postWrite, { postWriteSaga } from './postWrite';
import searchPrice, {searchPriceSaga} from './searchPrice';

const rootReducer = combineReducers({
    loading,
    postList,
    postWrite,
    searchPrice,
});

export function* rootSaga() {
    yield all([postListSaga(), postWriteSaga(), searchPriceSaga()]);
}

export default rootReducer;