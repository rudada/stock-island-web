import {call, put} from 'redux-saga/effects';
import {startLoading, finishLoading} from '../modules/loading';

/* Create actionType*/
export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
};


export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {
        yield put(startLoading(type));                                  //loading 상태

        try {
            const response = yield call(request, action.payload);       //api 요청
            yield put({                                                 //성공했을 때 SUCCESS dispatch
                type: SUCCESS,
                payload: response.data,
            });
        } catch (e) {                                                   //실패했을 때 FAILURE dispatch
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
        }

        yield put(finishLoading(type));
    };
}



