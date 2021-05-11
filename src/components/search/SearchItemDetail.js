import React from "react";
import PropTypes from "prop-types";
import "./SearchItemDetail.scss";

function SearchItemDetail({ detail, isMarked, onClickStar }) {
  return (
    <div className="SearchItemDetail">
      <div className="info">
        {isMarked ? (
          <i className="fas fa-star" onClick={onClickStar}></i>
        ) : (
          <i className="far fa-star" onClick={onClickStar}></i>
        )}
        <h5>{detail.name}</h5>
        <span className="id">{detail.stockid}</span>
        <span className="section">{detail.section}</span>
      </div>
      <div className="price">
        <h1>{parseFloat(detail.closing_price).toFixed(2)}</h1>
        <span className="id">{detail.prev_rate}</span>
      </div>
    </div>
  );
}

// function ItemDescription({ stockid, name, section }) {
//   return (
//     <div className="info_description">
//       <h3>{name}</h3>
//       <span className="id">{stockid}</span>
//       <span className="section">{section}</span>
//     </div>
//   );
// }

// function ItemRateInfo({ price, price_change, rate }) {
//   return (
//     <div className="info_rate">
//       <h4>{price}</h4>
//       <h4>{price_change}</h4>
//       <h4>{rate + "%"}</h4>
//     </div>
//   );
// }

// SearchItemDetail.propTypes = {
//   // _renderStar : PropTypes.func.isRequired,
//   // stockid : PropTypes.string.isRequired,
//   // name : PropTypes.string.isRequired,
//   // section : PropTypes.string.isRequired,
//   // price : PropTypes.number.isRequired,
//   // price_change : PropTypes.number.isRequired,
//   // rate : PropTypes.number.isRequired
// };

export default SearchItemDetail;
