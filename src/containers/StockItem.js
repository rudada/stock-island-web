import React, { Component } from 'react';
import StockItemInfo from '../components/StockItemInfo';
import StockItemGraph from '../components/StockItemGraph';
import { MDBIcon } from "mdbreact";

// get data : description, graph data
class StockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarked: false,
      description: {},
      graphs: {}
    };
  }

  componentDidMount() {
    this._getInfo();
    this._getGraph();
  }

  _getInfo() {
    //get info data here

    //test data
    this.setState({
      isMarked: false,
      description: {
        F_STOCK_LISTED_COMPANY_NO: 332,
        F_STOCK_LISTED_COMPANY_CD: "005930",
        F_STOCK_LISTED_COMPANY_NAME: "삼성전자",
        F_STOCK_LISTED_COMPANY_SECTION: "KOSPI",
        PRICE: 59700,
        PRICE_CHANGE: -200,
        RATE: -0.33
      },
      graphs: ["Graph1", "Graph2", "Graph3"],
    })
  }

  _getGraph() {
    //get graph data here
    
  }

  bookmarkClick() {
    this.setState({
      isMarked : !this.state.isMarked
    })
  }

  _renderStar() {
    if(this.state.isMarked) return (<MDBIcon icon="star"  className="amber-text star"  onClick={this.bookmarkClick.bind(this)}/>);
    else return(<MDBIcon far icon="star" className="amber-text star" onClick={this.bookmarkClick.bind(this)} />);
  }

  render() {
    const { description, graphs } = this.state;

    return (
      <div className="stockitem">
          <StockItemInfo
            _renderStar={this._renderStar.bind(this)}
            stockid={description.F_STOCK_LISTED_COMPANY_CD}
            name={description.F_STOCK_LISTED_COMPANY_NAME}
            section={description.F_STOCK_LISTED_COMPANY_SECTION}
            price={description.PRICE}
            price_change={description.PRICE_CHANGE}
            rate={description.RATE}></StockItemInfo>
        {/* 
        <StockItemGraph
          graph_day={graphs[0]}
          graph_week={graphs[1]}
          graph_month={graphs[2]}></StockItemGraph> */}

          <StockItemGraph></StockItemGraph>
      </div>
    );
  }
}


export default StockItem;