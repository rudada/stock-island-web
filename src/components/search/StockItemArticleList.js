import React from "react";
import ArticleList from "../common/ArticleList";
import './StockItemArticleList.scss'

function StockItemArticleList({ articles }) {
  return (
    <div className="StockItemArticleList">
      <h4 className="title">Latest News</h4>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export default StockItemArticleList;
