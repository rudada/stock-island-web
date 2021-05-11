import React, { useState, useEffect, useCallback } from "react";
import SearchItemDetail from "../../components/search/SearchItemDetail";
import { getDetail } from "../../lib/api/search";

// get data : description, graph data
function SearchDetailContainer({ keyword }) {
  const [isMarked, setMark] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    setDetail({
      stockid: keyword,
      name: "삼성전자",
      section: "KOSPI",
      closing_price: "82900", //previous_close
      prev_rate: "-0.97%",
    });
    setMark(false);
  }, []);

  const onClickStar = useCallback(() => {
    setMark(!isMarked);
  });

  return (
    <>
      {detail ? (
        <SearchItemDetail
          detail={detail}
          isMarked={isMarked}
          onClickStar={() => onClickStar()}
        />
      ) : (
        "Loading"
      )}
    </>
  );
}

export default SearchDetailContainer;

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
