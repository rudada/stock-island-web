import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as boardAPI from '../lib/api/board';
import { takeLatest } from '@redux-saga/core/effects';

const INITIALIZE = 'postWrite/INITIALIZE';
const SET_POST = 'postWrite/SET_POST';
const CHANGE_FIELD = 'postWrite/CHANGE_FIELD';
const [
    WRITE_POST,
    WRITE_POST_SUCCESS,
    WRITE_POST_FAILURE,
] = createRequestActionTypes('postWrite/WRITE_POST');
const [
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE,
] = createRequestActionTypes('postWrite/UPDATE_POST');


export const initialize = () => ({type: INITIALIZE});

export const setPost = (post, post_id) => ({
    type: SET_POST,
    post, post_id
});

export const changeField = ({key, value}) => ({
    type: CHANGE_FIELD,
    key, value
})

export const writePost = (title, content) => ({
    type : WRITE_POST,
    payload : { title, content },
})

export const updatePost = (postid, title, content) => ({
    type : UPDATE_POST,
    payload : { postid, title, content },
})

const writePostSaga = createRequestSaga(WRITE_POST, boardAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, boardAPI.updatePost);

export function* postWriteSaga() {
    yield takeLatest(WRITE_POST, writePostSaga);
    yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
    title: '',
    content: '',
    post: null,
    error: null,
    postId: null,
}

export default function postWrite(state = initialState, action) {
    switch(action.type) {
        case INITIALIZE : 
            return initialState;
        case SET_POST :
            return {
                ...state,
                title: action.post.BOARD_TITLE,
                content: action.post.BOARD_CONTENT,
                postId: action.post_id,
            }
        case CHANGE_FIELD : 
            return {
                ...state,
                [action.key]: action.value,
            };
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
        case UPDATE_POST_SUCCESS : 
            return {
                ...state,
                post: action.payload.body,
            };
        case UPDATE_POST_FAILURE : 
            return {
                ...state,
                error: action.error,
            }
        default : return state;
    }
}