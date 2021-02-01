import React from 'react';
import Searchbar from '../components/Searchbar';
import StockItem from './stockitem/StockItem';
import StockPrectionView from '../components/stockitem/StockPredictionView';
import StockItemArticle from './stockitem/StockItemArticle';

function Search({match}) {
    return (
        <div className="content_search">
            <Searchbar></Searchbar>
            <StockItem keyword = {match.params.keyword}></StockItem>
            <StockPrectionView></StockPrectionView>
            <StockItemArticle></StockItemArticle>
        </div>
    )
}

export default Search;