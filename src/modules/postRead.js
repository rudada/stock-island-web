import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from '@redux-saga/core/effects';

/* action type */
const [
    READ_POST,
    READ_POST_SUCCESS,
    READ_POST_FAILURE
] = createRequestActionTypes('post/READ_POST');
// const UNLOAD_POST = 'post/UNLOAD_POST';

/* action create function */
export const readPost = id => ({
    type: READ_POST,
    id
})

// export const unloadPost = () => ({
//     type: UNLOAD_POST
// })


/* saga */
const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
export function* postSaga() {
    yield takeLatest(READ_POST, readPostSaga);
}

/* initial state */
const initialState = {
    post: null,
    error: null,
};

/*reducer*/
export default function post(state = initialState, action) {
    switch(action.type) {
        case READ_POST_SUCCESS : //요청 완료(성공)
            return {
                ...state,
                post: action.payload
                
            }
        case READ_POST_FAILURE : //요청 완료(실패)
            return {
                ...state,
                payload
            }
    }
}