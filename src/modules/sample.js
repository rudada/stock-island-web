import { takeLatest } from '@redux-saga/core/effects';
import createRequestSaga, {createRequestActionTypes}  from '../lib/createRequestSaga';
import * as api from '../lib/api/ex';

//action type
const [
    GET_POST,                   //GET_POST시작
    GET_POST_SUCCESS,           //GET_POST마침-성공
    GET_POST_FAILURE,            //GET_POST마침-실패
 ] = createRequestActionTypes('sample/GET_POST');


const [
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
 ] = createRequestActionTypes('sample/GET_USERS');

//action create function
export const getPost = (id) => ({
    type: GET_POST,
    payload: id
});

export const getUsers = () => ({
    type: GET_USERS,
})

//아래부분을 리팩토링 후
const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// function* getPostSaga(action) {
//     yield put(startLoading(GET_POST));  //로딩시작

//     try {
//         const post = yield call(api.getPost, action.payload);   //api.getPost(action.payload)를 의미
//         yield put({
//             type: GET_POST_SUCCESS,
//             payload: post.data
//         });
//     } catch(e) {
//         yield put({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         });
//     }
//     yield put(finishLoading(GET_POST))  
// }


export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}



const initialState = {
    post: null,
    users: null,
}

export default function sample(state = initialState, action) {
    switch(action.type) {
        case GET_POST_SUCCESS : 
            return {
                ...state,
                post: action.payload
            };
        case GET_USERS_SUCCESS : 
            return {
                ...state,
                users: action.payload,
            };

        default : return state;
    }
}
