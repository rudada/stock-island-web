import React, { useState, useRef, useEffect } from "react";
import { select, line, curveLinear, axisBottom, scaleLinear, axisLeft } from "d3";
import './StockItemGraph.css';
import TabComponent from './common/TabComponent'


function ItemGraph(props) {
  const svgRef = useRef();
  const {data} = props;

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


function StockItemGraph() {
  return (
    <div className='stockitem_graph'>
      <TabComponent tabNames={['weekly', 'monthly']}
        childs={
          [<ItemGraph data={[200, 50, 25, 100, 30, 40, 280]}></ItemGraph>,
          <ItemGraph data={[100, 400, 400, 100, 30, 40, 280]}></ItemGraph>]
        }>
      </TabComponent>
    </div>
  );
}





export default StockItemGraph;