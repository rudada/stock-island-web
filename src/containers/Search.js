import React from 'react';
import Searchbar from '../components/Searchbar';
import StockItem from './StockItem';

function Search() {
    return (
        <div className="content_search">
            <Searchbar></Searchbar>
            <StockItem stockid="005930"></StockItem>
        </div>
    )
}

export default Search;