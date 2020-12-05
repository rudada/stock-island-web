import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import './StockItemGraph.css';

function StockItemGraph() {
  const [key, setKey] = useState('daily');

  return (
    <Tabs
      className="stockitem_graph"
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}>

      <Tab eventKey="daily" title="daily">
        <ItemGraph num = {1}></ItemGraph>
      </Tab>
      <Tab eventKey="weekly" title="weekly">
        <ItemGraph num = {2}></ItemGraph>
      </Tab>
    </Tabs>
  );
}

function ItemGraph({num}) {
  return(
    <div>
      {num}
    </div>
  );
}


export default StockItemGraph;