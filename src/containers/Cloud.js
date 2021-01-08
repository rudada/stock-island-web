import "d3-transition";
import { select } from "d3-selection";
import React from "react";
//import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from "./words.js";
//import conversor from "./d3WC.js";
import {ModalPage, modal15} from './Modal.js'

//import randomColor from 'randomcolor';



function getCallback(callback) {
  return function (word, event) {
    
    const isActive = callback !== "onWordMouseOut";
    const element = event.target;
    const text = select(element);
    text
    .get(<ModalPage />)
      // .on("click", () => {
      //   if (isActive) {
      //     window.open(`https://search.naver.com/search.naver?query=${word.text}&where=news&ie=utf8&sm=nws_hty` , "_blank");
      //   }
        
      // })
      .transition()
      .attr("background", "white")
      //.attr("font-size", isActive ? "370%" : "170%")
      .attr("text-decoration", isActive ? "underline" : "none");
  };
}

const callbacks = {
  //getWordColor: (word) => (word.value > 50 ? "orange" : "purple"),
  getWordTooltip: (word) =>
    `The word "${word.text}" appears ${word.value} times.`,
  onWordClick: getCallback("onWordClick"),
  onWordMouseOut: getCallback("onWordMouseOut"),
  onWordMouseOver: getCallback("onWordMouseOver")
};

const options = {
    colors: ["#F3AA88", "#FFF65F", "#73C7A1", "#2B60FC", "#65DFFB", " #A58CFD", "#EA5F94"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "Noto-Sans",
    fontSizes: [8, 65],
    fontStyle: "italic",
    fontWeight: "bold",
    padding: 5,
    rotations: 3,
    rotationAngles: [0],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
    size:[500, 600]
  };


function Cloud() {
  return (
    <div>
      <div >
        <ReactWordcloud options={options} callbacks={callbacks} words={words}  />
      </div>
    </div>
  );
}

export default Cloud;

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Cloud />, rootElement);
