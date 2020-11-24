import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

// 주식 정보, 그래프

class StockInfo extends Component {
    
    render() {
        return (
            <div className="stock_info">
                <RateInfo stockid="005930" name="삼성전자" section= "kospi"></RateInfo>
                <StockGraph></StockGraph>
            </div>
        )
    }

}

function RateInfo({ stockid, name, section}) {
    return (
        <div className="rateinfo">
            <Badge pill variant ="light">
            <i className="far fa-star"></i>
            {stockid}
            {name}
            {section}
            </Badge>
           
        </div>
    )
}
function StockGraph() {

    return (
        <div>그래프 자리</div>
    )
}

export default StockInfo;