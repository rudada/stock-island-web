import React from 'react';
import Searchbar from '../components/Searchbar';
import StockInfo from '../components/StockInfo';

function Search() {
    return (
        <div className="content_search">
            <Searchbar></Searchbar>
            <StockInfo  stockid = "005930"></StockInfo>
        </div>
    )
}

export default Search;