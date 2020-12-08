import React from 'react';
import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import './StockItemInfo.css';

function StockItemInfo({ _renderStar, stockid, name, section, price, price_change, rate }) {

  return (
    <MDBContainer className="stockitem_info">
      
      <MDBRow >
        <MDBCol md="1">{_renderStar()}</MDBCol>
        <MDBCol md="6" className="company_name"><ItemDescription stockid={stockid} name={name} section={section}></ItemDescription></MDBCol>
        <MDBCol md="5"><ItemRateInfo price={price} price_change={price_change} rate={rate}></ItemRateInfo></MDBCol>
      </MDBRow>
    
  </MDBContainer>
  )

}

function ItemDescription({ stockid, name, section }) {
  return (
    <div className="info_description">
      <h3>{name}</h3>
      <span className="id">{stockid}</span>
      <span className="section">{section}</span>
    </div>
  )
}

function ItemRateInfo({ price, price_change, rate }) {
  return (
    <div className="info_rate">
      <h4>{price}</h4>
      <h4>{price_change}</h4>
      <h4>{rate + "%"}</h4>
    </div>
  )
}

StockItemInfo.propTypes = {
  _renderStar : PropTypes.func.isRequired,
  // stockid : PropTypes.string.isRequired,
  // name : PropTypes.string.isRequired, 
  // section : PropTypes.string.isRequired, 
  // price : PropTypes.number.isRequired, 
  // price_change : PropTypes.number.isRequired, 
  // rate : PropTypes.number.isRequired
}

export default StockItemInfo;