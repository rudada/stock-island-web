import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import { getPrice } from '../lib/api/search';
import { takeLatest } from '@redux-saga/core/effects';

const [
    PRICE_SEARCH,
    PRICE_SEARCH_SUCCESS,
    PRICE_SEARCH_FAILURE,
] = createRequestActionTypes('searchPrice/PRICE_SEARACH');

export const priceSearch = ( stockid, from_date, end_date) => ({
    type: PRICE_SEARCH,
    payload: {stockid, from_date, end_date},
})

const priceSearchSaga = createRequestSaga(PRICE_SEARCH, getPrice);

export function* searchPriceSaga() {
    yield takeLatest(PRICE_SEARCH, priceSearchSaga);
}

const initialState = {
    result: null,
    error: null,
}

export default function searchPrice(state = initialState, action) {
    switch(action.type) {
        case PRICE_SEARCH_SUCCESS : 
            return {
                ...state,
                result: action.payload.body.data,
            }
        case PRICE_SEARCH_FAILURE :
            return {
                ...state,
                result: action.error,
            }
        default: return state;
    }
}