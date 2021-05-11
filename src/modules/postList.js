import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as boardAPI from '../lib/api/board';
import { takeLatest } from '@redux-saga/core/effects';

const [
    LIST_POST,
    LIST_POST_SUCCESS,
    LIST_POST_FAILURE,
] = createRequestActionTypes('postList/LIST_POST');

const CHANGE_PAGE = "CHANGE_PAGE"
export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page : page
})

export const listPost = (offset, limit = 10) => ({
    type: LIST_POST,
    payload: {offset, limit}, 
})

const listPostSaga = createRequestSaga(LIST_POST, boardAPI.listPost);

export function* postListSaga() {
    yield takeLatest(LIST_POST, listPostSaga);
}

const initialState = {
    page: 0,
    result: null,
    error: null,
}

export default function postList(state = initialState, action) {
    switch(action.type) {
        case LIST_POST_SUCCESS : 
            return {
                ...state,
                result: action.payload.body,
            };
        case LIST_POST_FAILURE : 
            return {
                ...state,
                error: action.error,
            };
        case CHANGE_PAGE :
            return {
                ...state,
                page : action.page,
            }
        default : return state;
    }
}