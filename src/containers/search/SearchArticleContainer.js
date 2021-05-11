import React, { Component } from "react";
import StockItemArticleList from "../../components/search/StockItemArticleList";

class SearchArticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this._getArticle();
  }

  _getArticle() {
    //call API here
    this.setState({
      articles: [
        { title: "기사제목1", url: "/", date: "2021-04-24" },
        { title: "기사제목2", url: "/", date: "2021-04-24" },
        { title: "기사제목3", url: "/", date: "2021-04-24" },
        { title: "기사제목4", url: "/", date: "2021-04-24" },
        { title: "기사제목5", url: "/", date: "2021-04-24" },
        { title: "기사제목6", url: "/", date: "2021-04-24" },
        { title: "기사제목7", url: "/", date: "2021-04-24" },
        { title: "기사제목8", url: "/", date: "2021-04-24" },
      ],
    });
  }

  render() {
    return (
      <StockItemArticleList
        articles={this.state.articles}
      ></StockItemArticleList>
    );
  }
}

export default SearchArticleContainer;
