
import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import request from 'axios';

const fD = ReactDOM.findDOMNode;

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredKeywords: [],
        };
        this.changeHandler = this.changeHandler.bind(this);
        this._callAPI = this.debounce(this._callAPI.bind(this), 100);
    }

    debounce(fn, delay) {
        let timer;                      //클로저
        return function (...args) {
            clearTimeout(timer);        //이전 실행에서 등록했던 callback 지연 실행을 해제
            timer = setTimeout(() => { fn(...args); }, delay);
        }
    }

    changeHandler = (event) => {
        let keyword = event.target.value ? event.target.value : `'%20'`;
        this._callAPI(keyword);
    }

    _callAPI = (value) => {
        const keyword = value ? value : `'%20'`;
        const config = {
            baseURL : `https://qmj5oql835.execute-api.ap-northeast-1.amazonaws.com/api/search/${keyword}`,
            method : 'GET',
        }

        request(config)
        .then(response => response.data)
        .then(data => data.body)
        .then(body => JSON.parse(body))
        .then(data => {
            this.setState({
                filteredKeywords: data['search']
            }, () => {})                                     //setState 함수의 비동기 성질 때문에 callback 함수를 넣어서 delay 막음
        })
        .catch(err => {console.log(err)})
    }

    render() {
        const children = this.props.children
        return (
            cloneElement(children, {
                changeHandler: this.changeHandler,
                filteredKeywords: this.state.filteredKeywords,
            })
        );
    }
}

export default Autocomplete;