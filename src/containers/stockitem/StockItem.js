import React, { Component } from 'react';
import StockItemInfo from '../../components/stockitem/StockItemInfo';
import StockItemGraph from '../../components/stockitem/StockItemGraph';
import { MDBIcon } from "mdbreact";
import axios from "axios";

// get data : description, graph data
class StockItem extends Component {
  constructor(props) {
    super(props);

    this.keyword = props.keyword;
    this.state = {
      isMarked: false,
      description: {},
    };

    const today = new Date();
    this.today = today;
    this.oneYearAgo = new Date((new Date()).setFullYear(today.getFullYear() - 1));
    this.threeMonthAgo = new Date((new Date()).setMonth(today.getMonth() - 3));
  }


  componentDidMount() {
    this._getGraph();
  }

  _getGraph = async () => {
    const totalData = await this._callAPI(this.oneYearAgo);
    const quarterData = await this._callAPI(this.threeMonthAgo);

    const totalGraph = this.makeGraph(totalData);
    const quarterGraph = this.makeGraph(quarterData);

    this.setState({
      totalGraph: totalGraph,
      quarterGraph: quarterGraph,
    })
  }

  _callAPI = (date) => {
    return axios.post('https://qmj5oql835.execute-api.ap-northeast-1.amazonaws.com/api/graph',
      { 'from_date': date, 'end_date': this.today, 'company_cd': this.keyword })
      .then(response => response.data.body)
      .then(body => JSON.parse(body).data)
      .catch(console.error)
  }

  makeGraph(data) {
    return data.reduce(
      (result, row) => {
        return([
        [...(result[0] || []), row['F_STOCK_TRANS_DATE']],
        [...(result[1] || []), row['F_STOCK_DAY_CLOSING_PRICE']]
      ])},
      new Array(2)
    );
  }

  /*
  data = {
    [date: 01-22, price: 300],
    [date: 01-23, price: 400],
    [date: 01-24, price: 250],
    ...,
  }
  data = {
    {01-22, 01-23, 01-24, ...},
    {300, 400, 250,  ...}
  }
  */



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
              stockid={"qq"}
              name={"as"}
              // section={description[]}
              // price={description[]}
              section={"g"}
              price={"gg"}
              price_change={"111"}
              rate={"111"}>
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