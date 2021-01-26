import React, { Component } from 'react';
import StockItemInfo from '../../components/stockitem/StockItemInfo';
import StockItemGraph from '../../components/stockitem/StockItemGraph';
import { MDBIcon } from "mdbreact";
import axios from 'axios';

// get data : description, graph data
class StockItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMarked: false,
      description: {},
    };

    const url = location.href;
    this.keyword = (url.slice(url.length - 6, url.length));
  }


  componentDidMount() {
    this._getGraph();
  }

  _getGraph = async () => {
    //1년치 그래프
    const data = await this._callAPI();

    const totalGraph = data.map((row) => {
      return ({
        date: row['F_STOCK_TRANS_DATE'],
        price: row['F_STOCK_DAY_CLOSING_PRICE']
      })
    });

    const today = new Date();
    const threeMonthAgo = new Date(today.setMonth(today.getMonth() - 3));                                   //3달 전 날짜 
    const quarterGraph = totalGraph.filter((row) => new Date(row['date']) >= threeMonthAgo);                //3달 전까지의 가격 배열

    this.setState({
      totalGraph: totalGraph,
      quarterGraph: quarterGraph,
      description: data[0]
    })
  }

  _callAPI = () => {
    const today = new Date();
    const fromDate = new Date(today.setFullYear(today.getFullYear() - 1));
    return axios.post('https://qmj5oql835.execute-api.ap-northeast-1.amazonaws.com/api/graph',
      { 'from_date': fromDate, 'end_date': new Date(), 'company_cd': this.keyword })
      .then(response => response.data.body)
      .then(body => JSON.parse(body).data)
      .catch(console.error)

    // this.setState({
    //   isMarked: false,

    //   description: {
    //     F_STOCK_LISTED_COMPANY_NO: 332,
    //     F_STOCK_LISTED_COMPANY_CD: "005930",
    //     F_STOCK_LISTED_COMPANY_NAME: "삼성전자",
    //     F_STOCK_LISTED_COMPANY_SECTION: "KOSPI",
    //     PRICE: 59700,
    //     PRICE_CHANGE: -200,
    //     RATE: -0.33
    //   },
    //   graphs: ["Graph1", "Graph2", "Graph3"],
    // })
  }



  bookmarkClick() {
    this.setState({
      isMarked: !this.state.isMarked
    })
  }

  _renderStar() {
    if (this.state.isMarked) return (<MDBIcon icon="star" className="amber-text star" onClick={this.bookmarkClick.bind(this)} />);
    else return (<MDBIcon far icon="star" className="amber-text star" onClick={this.bookmarkClick.bind(this)} />);
  }

  render() {
    const { totalGraph, quarterGraph, description } = this.state;

    return (
      <div className="stockitem">
        { totalGraph && quarterGraph ?
          <div>
            <StockItemInfo
              _renderStar={this._renderStar.bind(this)}
              stockid="stockid"
              name="name"
              section="section"
              price={1111}
              price_change="price_change"
              rate="rate">
            </StockItemInfo>
            <StockItemGraph totalGraph={totalGraph} quarterGraph={quarterGraph}></StockItemGraph>
          </div>

          : 'Loading'           //graphs 가 존재하지 않으면 'Loading' return
        }
      </div>
    );
  }
}


export default StockItem;