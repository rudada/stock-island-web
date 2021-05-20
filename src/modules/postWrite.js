import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as boardAPI from '../lib/api/board';
import { takeLatest } from '@redux-saga/core/effects';

const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE,
] = createRequestActionTypes('postWrite/WRITE_POST');

export const writePost = (title, content) => ({
    type : WRITE_POST,
    payload : { title, content },
})

const writePostSaga = createRequestSaga(WRITE_POST, boardAPI.writePost);

export function* postWriteSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
    post: null,
    error: null
}

export default function postWrite(state = initialState, action) {
    switch(action.type) {
        case WRITE_POST :
            return {
                ...state,
                post: null,
                error: null
            };
        case WRITE_POST_SUCCESS :
            return {
                ...state,
                post: action.payload.body,
            };
        case WRITE_POST_FAILURE :
            return {
                ...state,
                error: action.error,
            };
        default : return state;
    }
}