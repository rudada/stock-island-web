import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { priceSearch } from "../../modules/searchPrice";
import SearchItemGraph from "../../components/search/SearchItemGraph";

function SearchGraphContainer({
  priceSearch,
  result,
  error,
  loading,
  keyword,
}) {
  const [startDate, setStart] = useState();
  const [endDate, setEnd] = useState();

  const getDate = (date) => {
    if(!date) return ``;
    let month = date.getMonth() + 1;
    month = month >= 10 ? month : "0" + month;
    let day = date.getDate();
    day = day >= 10 ? day : "0" + day;
    return `${date.getFullYear()}${month}${day}`;
  };

  useEffect(async () => {
    if (startDate == null || endDate == null) {
      const today = new Date();
      const threeMonthAgo = new Date(new Date().setMonth(today.getMonth() - 3));
      setStart(threeMonthAgo);
      setEnd(today);
    }
    await priceSearch(keyword, getDate(startDate), getDate(endDate));
    
  }, [startDate, endDate]);

  return (
    <>
      {error ? (
        "error"
      ) : !result || loading ? (
        "loading"
      ) : (
        <SearchItemGraph
          graph={result}
          startDate={startDate}
          endDate={endDate}
          setStartDate={(date) => setStart(date)}
          setEndDate={(date) => setEnd(date)}
        />
      )}
    </>
  );
}

export default connect(
  ({ searchPrice, loading }) => ({
    result: searchPrice.result,
    error: searchPrice.error,
    loading: loading["searchPrice/PRICE_SEARCH"],
  }),
  {
    priceSearch,
  }
)(SearchGraphContainer);

// constructor(props) {
//   super(props);

//   this.keyword = props.keyword;
//   this.state = {
//     isMarked: false,
//     description: {},
//   };

//   const today = new Date();
//   this.today = today;
//   this.oneYearAgo = new Date((new Date()).setFullYear(today.getFullYear() - 1));
//   this.threeMonthAgo = new Date((new Date()).setMonth(today.getMonth() - 3));
// }

// _getGraph = async () => {
//   const totalData = await this._callAPI(this.oneYearAgo);
//   const quarterData = await this._callAPI(this.threeMonthAgo);

//   const totalGraph = this.makeGraph(totalData);
//   const quarterGraph = this.makeGraph(quarterData);

//   this.setState({
//     totalGraph: totalGraph,
//     quarterGraph: quarterGraph,
//   })
// }

// _callAPI = (date) => {
//   return axios.post('https://qmj5oql835.execute-api.ap-northeast-1.amazonaws.com/api/graph',
//     { 'from_date': date, 'end_date': this.today, 'company_cd': this.keyword })
//     .then(response => response.data.body)
//     .then(body => JSON.parse(body).data)
//     .catch(console.error)
// }

// makeGraph(data) {
//   return data.reduce(
//     (result, row) => {
//       return([
//       [...(result[0] || []), row['F_STOCK_TRANS_DATE']],
//       [...(result[1] || []), row['F_STOCK_DAY_CLOSING_PRICE']]
//     ])},
//     new Array(2)
//   );
// }

/*

  data = {
    {01-22, 01-23, 01-24, ...},
    {300, 400, 250,  ...}
  }
  */
