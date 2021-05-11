import React, { useState, useEffect, useCallback } from "react";
import SearchItemGraph from "../../components/search/SearchItemGraph";

function SearchGraphContainer({ keyword }) {
  const [graph, setGraph] = useState([]);
  const [startDate, setStart] = useState();
  const [endDate, setEnd] = useState();

  useEffect(() => {
    const today = new Date();
    const threeMonthAgo = new Date(new Date().setMonth(today.getMonth() - 3));
    setStart(threeMonthAgo);
    setEnd(today);

    const data = [];
    for (let i = 1; i < 101; i++) {
      data.push({
        date: new Date(new Date().setDate(today.getDate() - i)),
        price: Math.floor(Math.random() * 50),
      });
    }
    setGraph(data);
  }, []);

  return (
    <>
      {graph.length ? (
        <SearchItemGraph
          graph={graph}
          startDate={startDate}
          endDate={endDate}
          setStartDate={(date) => setStart(date)}
          setEndDate={(date) => setEnd(date)}
        />
      ) : (
        "Loading"
      )}
    </>
  );
}

export default SearchGraphContainer;

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
