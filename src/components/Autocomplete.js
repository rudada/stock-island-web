
import React from 'react';
import ReactDOM from 'react-dom';
import request from 'axios';
import './Autocomplete.css';

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
            baseURL : 'https://pcenpicjxi.execute-api.ap-northeast-1.amazonaws.com/Prod/search?keyword=',
            method: 'GET',
        }        

        request(config)
        .then(response => response.data)
        .then(body => {
            if(!body){
                return console.error('Failed to load')
            }
            this.setState({keywords: body.search})
        })
        .catch(console.error)
    }

    filter(event) 
    {
        this.setState({
            currentKeyword: event.target.value,
            filteredKeywords: (this.state.keywords.filter(
                    function(keyword, index, list){
                        if(event.target.value == '') { return false; }
                        return (event.target.value.toLowerCase() === keyword.F_STOCK_LISTED_COMPANY_NAME.toLowerCase().substr(0, event.target.value.length))
                    }
                )
            )}
            , function(){}
        );
    }

    keywordList() {
        this.state.filteredKeywords.map(
            function(keyword, index, list){
                return <div key={keyword.F_STOCK_LISTED_COMPANY_CD}>
                        <a className="keyword-list-item" href={'/#/' + keyword.name} target="_blank">
                            #{keyword.F_STOCK_LISTED_COMPANY_NAME}
                        </a>
                    </div>
            }
        )
    }

    render() {
        return (
            <div className="searchbar-autocomplete">
                <div>
                    <input className="searchbar-input" 
                        type="text" 
                        onChange={this.filter} 
                        value={this.state.currentKeyword}
                    ></input>
                </div>
                <div className="keyword-list">
                    {
                        this.state.filteredKeywords.map(
                            function(keyword, index, list){
                                return <div key={keyword.F_STOCK_LISTED_COMPANY_CD}>
                                        <a className="keyword-list-item" href={'/#/' + keyword.name} target="_blank">
                                            {keyword.F_STOCK_LISTED_COMPANY_NAME}
                                        </a>
                                    </div>
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}
  
export default Autocomplete;