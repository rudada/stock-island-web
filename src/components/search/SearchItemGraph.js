import React, { useState, useRef, useEffect } from "react";
import DatePick from "../../components/common/DatePick";
import {
  select,
  axisBottom,
  scaleLinear,
  axisLeft,
  extent,
  scaleUtc,
  curveCardinalOpen,
  area,
} from "d3";
import "./SearchItemGraph.scss";

function ItemGraph({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleUtc() //x축 설정
      .domain(extent(data, (d) => d.date)) //x축 요소 범위
      .range([0, 500]);
    const yScale = scaleLinear()
      .domain(extent(data, (d) => d.price))
      .nice()
      .range([300, 0]); //아래에서 위로 올라가야 하기 때문엥 거꾸로 넣기

    const xAxis = (g) =>
      g.call(
        axisBottom(xScale)
          .ticks(5)
          .tickFormat(
            (d) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
          )
          .tickSizeOuter(0)
      );

    const yAxis = (g) => g.call(axisLeft(yScale));

    svg
      .select(".x-axis")
      .style("transform", "translateY(310px)") //그래프 하단에 x축 그리기 위해
      .call(xAxis);

    svg.select(".x-axis").select(".domain").attr("stroke", "transparent");

    svg.select(".y-axis").style("transform", "translateX(-10px)").call(yAxis);

    svg.select(".y-axis").select(".domain").attr("stroke", "transparent");

    const Area = area()
      .x((d) => xScale(d.date))
      .y0(300)
      .y1((d) => yScale(d.price))
      .curve(curveCardinalOpen);

    svg
      .append("linearGradient")
      .attr("id", "line-gradient")
      .attr("gradientTransform", "rotate(90)")
      .attr("gradientUnits", "userSpaceOnUse")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#73C7A1" },
        { offset: "20%", color: "#73c7a191" },
        { offset: "60%", color: "transparent" },
      ])
      .enter()
      .append("stop")
      .attr("offset", function (d) {
        return d.offset;
      })
      .attr("stop-color", function (d) {
        return d.color;
      });

    svg
      .append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", Area)
      .attr("fill", "none")
      .style("fill", "url(#line-gradient)");
  }, [data]);

  return (
    <svg ref={svgRef}>
      <g className="y-axis" />
      <g className="x-axis" />
    </svg>
  );
}

function SearchItemGraph({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  graph,
}) {
  return (
    <div className="SearchItemGraph">
      <div className="datepicker">
        <DatePick
          startDate={startDate}
          endDate={endDate}
          setStartDate={(date) => setStartDate(date)}
          setEndDate={(date) => setEndDate(date)}
        />
      </div>
      <ItemGraph data={graph}></ItemGraph>
    </div>
  );
}

export default SearchItemGraph;
