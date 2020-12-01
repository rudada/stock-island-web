import React, { Component } from 'react';
import StockItemInfo from '../components/StockItemInfo';
import StockItemGraph from '../components/StockItemGraph';
import { MDBIcon } from "mdbreact";
import './StockItem.css';

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
    this._getData();
    console.log(this.state.description);
  }

  _getData() {
    //get data here

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

  bookmarkClick(){
    alert("즐겨찾기ㅣ");
  }

  render() {
    const { isMarked, description, graphs } = this.state;
    
    return (
      <div className="stockitem">
        <div className="h_company">
        <MDBIcon far icon="star" className = "amber-text star" size="1g" onClick={this.bookmarkClick}/>
        {/* <MDBIcon icon="star" /> */}
        <StockItemInfo
          stockid={description.F_STOCK_LISTED_COMPANY_CD}
          name={description.F_STOCK_LISTED_COMPANY_NAME}
          section={description.F_STOCK_LISTED_COMPANY_SECTION}
          price={description.PRICE}
          price_change={description.PRICE_CHANGE}
          rate={description.RATE + "%"}></StockItemInfo>
          </div>
{/* 
        <StockItemGraph
          graph_day={graphs[0]}
          graph_week={graphs[1]}
          graph_month={graphs[2]}></StockItemGraph> */}
      </div>
    );
  }
}


export default StockItem;