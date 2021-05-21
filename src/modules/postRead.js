import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as boardAPI from "../lib/api/board";
import { takeLatest } from "@redux-saga/core/effects";

const UNLOAD_POST = 'postRead/UNLOAD_POST';
const [
  READ_POST, 
  READ_POST_SUCCESS,
  READ_POST_FAILURE
] = createRequestActionTypes("postRead/READ_POST");

export const unloadPost = () => ({
  type: UNLOAD_POST
})

export const readPost = (post_id) => ({
  type: READ_POST,
  payload: { post_id },
});

const readPostSaga = createRequestSaga(READ_POST, boardAPI.readPost);

export function* postReadSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  error: null,
};

export default function postRead(state = initialState, action) {
  switch (action.type) {
    case UNLOAD_POST: 
      return initialState;
    case READ_POST_SUCCESS:
      return {
        ...state,
        post: action.payload.body.data,
      };
    case READ_POST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
