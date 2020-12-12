import React from 'react';
import StockPrectionView from '../components/StockPredictionView';
import Autocomplete from '../components/Autocomplete';

function StockItemDetails() {
    return (
        <div className="content_search">
            <br></br>
            <Autocomplete></Autocomplete>
            <br></br>
            <br></br>
            <StockPrectionView></StockPrectionView>
        </div>
    )
}

export default StockItemDetails;