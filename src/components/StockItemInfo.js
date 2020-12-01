import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";


function StockItemInfo({ stockid, name, section, price, price_change, rate }) {

  return (
    <MDBContainer className="stockitem_info">
      <MDBRow>
        <MDBCol md="7"><ItemDescription stockid={stockid} name={name} section={section}></ItemDescription></MDBCol>
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
      <h4>{rate}</h4>
    </div>
  )
}

export default StockItemInfo;