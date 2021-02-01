import React, { useState, useRef, useEffect } from "react";
import { select, line, curveLinear, axisBottom, scaleLinear, axisLeft } from "d3";
import './StockItemGraph.css';
import TabComponent from '../common/TabComponent'


function ItemGraph(props) {
  const svgRef = useRef();
  const { price, date } = props;
  const max = Math.max(...price);
  const min = Math.min(...price);

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()              //x축 설정
      .domain([0, price.length - 1])           //x축 요소 범위
      .range([0, 500]);
    const yScale = scaleLinear()
      .domain([min, max])
      .range([300, 0]);                       //아래에서 위로 올라가야 하기 때문엥 거꾸로 넣기

    const xAxis = axisBottom(xScale)
      .ticks(5)                               //ticks(눈금선)
      .tickFormat((index) => {
        const element = new Date(date[index]);
        return `${element.getFullYear()}-${element.getMonth()+1}-${element.getDate()}`
      });
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
      .data([price])                             //데이터와 바인딩
      .join("path")
      .attr("class", "line")
      .attr("d", (value) => Line(value))        //d(좌표값 속성) -> Line메쏘드로
      .attr("fill", "none")                     //채우기 없음
      .attr("stroke", "gray");                  //선색상

  }, [price]);

  return (
    <svg ref={svgRef}>
      <g className="y-axis" />
      <g className="x-axis" />
    </svg>
  );
}


function StockItemGraph(props) {
  const { totalGraph, quarterGraph} = props;

  return (
    <div className='stockitem_graph'>
      <TabComponent tabNames={['3개월', '1년']}>
        <ItemGraph date ={totalGraph[0]} price={totalGraph[1]} ></ItemGraph>
        <ItemGraph date ={quarterGraph[0]} price={quarterGraph[1]}></ItemGraph>
      </TabComponent>
    </div>
  );
}

export default StockItemGraph;