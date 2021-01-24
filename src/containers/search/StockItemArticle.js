import React, { Component } from 'react';
import StockItemArticleList from '../../components/stockitem/StockItemArticleList'

class StockItemArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        this._getArticle();
    }

    _getArticle() {
        //call API here
        this.setState({
            articles: [
                { NO: 1, title: "어쩌궁", date: "20200122" },
                { NO: 2, title: "어쩌궁", date: "20200122" },
                { NO: 3, title: "어쩌궁", date: "20200122" },
                { NO: 4, title: "어쩌궁", date: "20200122" },
                { NO: 5, title: "어쩌궁", date: "20200122" },
                { NO: 6, title: "어쩌궁", date: "20200122" },
                { NO: 7, title: "어쩌궁", date: "20200122" },
                { NO: 8, title: "어쩌궁", date: "20200122" },
                { NO: 9, title: "어쩌궁", date: "20200122" },
                { NO: 10, title: "어쩌궁", date: "20200122" },
                { NO: 11, title: "어쩌궁", date: "20200122" },
                { NO: 12, title: "어쩌궁", date: "20200122" },
                { NO: 13, title: "어쩌궁", date: "20200122" },
                { NO: 14, title: "어쩌궁", date: "20200122" },
                { NO: 15, title: "어쩌궁", date: "20200122" },
            ]
        })
    }

    render() {
        return(
            <StockItemArticleList articles={this.state.articles}></StockItemArticleList>
        ) 
    }


}

export default StockItemArticle