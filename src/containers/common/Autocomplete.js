
import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
// import request from 'axios';

const fD = ReactDOM.findDOMNode;

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredKeywords: [],
        };
        this.filter = this.filter.bind(this);
        this._callAPI = this._callAPI.bind(this);
    }

    filter = async(event) => {
        const data = (await this._callAPI(event.target.value)) || new Array();

        this.setState({
            filteredKeywords: data
            }
            , () => {}                                                              //setState 함수의 비동기 성질 때문에 callback 함수를 넣어서 delay 막았당
        );
    }

    _callAPI = (value) => {
        if(!value) {return console.error('Failed to load');}

        return fetch('https://qmj5oql835.execute-api.ap-northeast-1.amazonaws.com/api/search/' + value)
          .then(response => response.json())
          .then(json => json.body)
          .then(body => JSON.parse(body))
          .then(data => {
              if(!data['search']) {
                  return console.error('Failed to load')
              }
              return data['search']})
          .catch(err => console.log(err))
      }

    render() {
        const children = this.props.children
        return (
            cloneElement(children, {
                changeHandler: this.filter,
                filteredKeywords: this.state.filteredKeywords,
            })
        );
    }
}

export default Autocomplete;