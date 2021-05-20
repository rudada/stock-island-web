
import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import request from 'axios';
import {autoComplete} from '../../lib/api/search.js';

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

    _callAPI = async (value) => {
        const keyword = value ? value : `'%20'`;

        const data = await autoComplete(keyword)
        .then(response => response.data.body.data)
        .then(data => data['search'])
        .catch(err => {console.log(err)});

        this.setState({
            filteredKeywords: data
        }, () => {})   
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