import React, { useState, useRef, useEffect } from "react";
import { select, line, curveLinear, axisBottom, scaleLinear, axisLeft } from "d3";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './StockItemGraph.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const panelStyle = {
    justifyContent: 'center',
    padding: '10px',
    marginTop: '10px',
    textAlign: 'center',
  }

  return (
    <div
      hidden={value !== index}
      id={`tabpanel_${index}`}
      {...other}
      style={panelStyle}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: pink['500'],
    borderRadius: 4,
    marginBottom: 10,
  },
  tab: {
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    }
  },
  tabs: {
    '& > div > span': {                 //밑줄
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {                         
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'white',
      }
    }
  }
  
}));

function StockItemGraph() {
  // const [key, setKey] = useState('daily');

  const classes = useStyles();


  const [currentTab, setTab] = useState(0);
  const tabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    // <Tabs
    //   className="stockitem_graph"
    //   id="controlled-tab-example"
    //   activeKey={key}
    //   onSelect={(k) => setKey(k)}>

    //   <Tab eventKey="daily" title="daily">
    //     <ItemGraph num={1}></ItemGraph>
    //   </Tab>
    //   <Tab eventKey="weekly" title="weekly">
    //     <ItemGraph num={2}></ItemGraph>
    //   </Tab>
    // </Tabs>
    <div className={`stockitem_graph ${classes.root}`} >
      <Tabs className={classes.tabs} value={currentTab} onChange={tabChange} TabIndicatorProps={{ children: <span /> }}>
        <Tab className={classes.tab} label="Weekly" />
        <Tab className={classes.tab} label="Daily" />
      </Tabs>

      <TabPanel value={currentTab} index={0}>
        <ItemGraph num={1}></ItemGraph>
      </TabPanel>

      <TabPanel value={currentTab} index={1}>
        <ItemGraph num={2}></ItemGraph>
      </TabPanel>
    </div>
  );
}

const data = [1, 5, 20, 25, 100, 30, 40, 3];

function ItemGraph({ num }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()              //x축 설정
      .domain([0, data.length - 1])           //x축 요소 범위
      .range([0, 800]);
    const yScale = scaleLinear()
      .domain([0, 450])
      .range([450, 0]);                       //아래에서 위로 올라가야 하기 때문엥 거꾸로 넣기


    const xAxis = axisBottom(xScale)
      .ticks(data.length)                     //ticks(눈금선)
    // .tickFormat((index) => index + 1);     
    const yAxis = axisLeft(yScale)
      .ticks(5);
    svg
      .select(".x-axis")
      .style("transform", "translateY(450px)") //그래프 하단에 x축 그리기 위해
      .call(xAxis);
    svg
      .select(".y-axis")
      .style("transform", "translateX(0px)")
      .call(yAxis);


    const Line = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveLinear);                      //그래프스타일

    svg
      .selectAll(".line")
      .data([data])                             //데이터와 바인딩
      .join("path")
      .attr("class", "line")
      .attr("d", (value) => Line(value))        //d(좌표값 속성) -> Line메쏘드로
      .attr("fill", "none")                     //채우기 없음
      .attr("stroke", "gray");                  //선색상

  }, [data]);

  return (
    <svg ref={svgRef}>
      <g className="y-axis" />
      <g className="x-axis" />
    </svg>
  );
}


export default StockItemGraph;