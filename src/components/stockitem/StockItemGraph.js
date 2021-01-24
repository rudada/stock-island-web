import React, { useState, useRef, useEffect } from "react";
import { select, line, curveLinear, axisBottom, scaleLinear, axisLeft } from "d3";
import './StockItemGraph.css';
import TabComponent from '../common/TabComponent'


function ItemGraph(props) {
  const svgRef = useRef();
  const {data} = props;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const date = [ "2021-01-03",
  "2021-01-04",
  "2021-01-05",
  "2021-01-06" ,
  "2021-01-07",
  "2021-01-08",
  "2021-01-09",]

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()              //x축 설정
      .domain([0, data.length-1])           //x축 요소 범위
      .range([0, 500]);
    const yScale = scaleLinear()
      .domain([min, max])
      .range([300, 0]);                       //아래에서 위로 올라가야 하기 때문엥 거꾸로 넣기


    const xAxis = axisBottom(xScale)
      .ticks(data.length/2)                     //ticks(눈금선)
      .tickFormat((index) => date[index]);     
    const yAxis = axisLeft(yScale)
      .ticks(5);
    svg
      .select(".x-axis")
      .style("transform", "translateY(300px)") //그래프 하단에 x축 그리기 위해
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


function StockItemGraph() {
  const data1 = {
    "2021-01-03" : 200,
    "2021-01-04" : 50,
    "2021-01-05" : 25,
    "2021-01-06" : 100,
    "2021-01-07" : 30,
    "2021-01-08" : 40,
    "2021-01-09" : 280,
  }

  return (
    <div className='stockitem_graph'>
      <TabComponent tabNames={['weekly', 'monthly']}>
        <ItemGraph data={[200, 50, 25, 100, 30, 40, 280]}></ItemGraph>
        <ItemGraph data={[2500, 6000, 7000, 1000, 15000, 3000, 2000]}></ItemGraph>
      </TabComponent>
    </div>
  );
}

export default StockItemGraph;