
import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import request from 'axios';

const fD = ReactDOM.findDOMNode;

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: [],
            filteredKeywords: [],
            currentKeyword: ''
        };
        this.filter = this.filter.bind(this);
    }

    componentDidMount() {

        let config = {
            baseURL: 'https://pcenpicjxi.execute-api.ap-northeast-1.amazonaws.com/Prod/search?keyword=',
            method: 'GET',
        }

        request(config)
            .then(response => response.data)
            .then(body => {
                if (!body) {
                    return console.error('Failed to load')
                }
                this.setState({ keywords: body.search })
            })
            .catch(console.error)
    }

    filter(event) {
        this.setState({
            currentKeyword: event.target.value,
            filteredKeywords: this.state.keywords.filter(
                function (keyword, index, list) {
                    if (event.target.value == '') { return false; }
                    return (event.target.value.toLowerCase() === keyword.F_STOCK_LISTED_COMPANY_NAME.toLowerCase().substr(0, event.target.value.length))
                }
            )}
            , () => { }                                     //setState 함수의 비동기 성질 때문에 callback 함수를 넣어서 delay 막았당
        );

    }

    render() {
        const children = this.props.children
        return (
            cloneElement(children, {
                changeHandler: this.filter,
                filteredKeywords: this.state.filteredKeywords,
                currentKeyword: this.state.currentKeyword
            })
        );
    }
}

export default Autocomplete;