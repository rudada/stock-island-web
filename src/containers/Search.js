import React from 'react';
import Searchbar from '../components/Searchbar';
import StockItem from './search/StockItem';
import StockPrectionView from '../components/stockitem/StockPredictionView';
import StockItemArticle from './search/StockItemArticle';

function Search() {
    return (
        <div className="content_search">
            <Searchbar></Searchbar>
            <StockItem stockid="005930"></StockItem>
            <StockPrectionView></StockPrectionView>
            <StockItemArticle></StockItemArticle>
        </div>
    )
}

export default Search;