/*redux-saga를 통해 API 요청 진행하는 모듈*/

/*action type*/
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

/*action create function*/
export const startLoading = (payload) => ({
    type: START_LOADING,
    payload
})

export const finishLoading = (payload) => ({
    type: FINISH_LOADING,
    payload
})


/*initial state*/
const initialState = {};

/*reducer*/
export default function loading(state = initialState, action) {   
    switch(action.type) {
        case START_LOADING : 
            return {
                ...state,
                [action.payload]: true              //(action.payload는 요청명이당)
            };
        case FINISH_LOADING :  {
            return {
                ...state,
                [action.payload] : false
            };
        }
        default : return state;
    }

}