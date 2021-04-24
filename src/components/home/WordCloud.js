import React, { useMemo, useCallback } from "react";
import ReactWordcloud from "react-wordcloud";
import { select } from "d3-selection";
import "d3-transition";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function WordCloud({ words, onClick }) {
  const getCallback = useCallback((callback) => {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      text
        .transition()
        .attr("background", "white")
        //.attr("font-size", isActive ? "370%" : "170%")
        .attr("text-decoration", isActive ? "underline" : "none");
    };
  });

  const callbacks = useMemo(() => {
    return {
      getWordTooltip: (word) =>
        `The word "${word.text}" appears ${word.value} times.`,
      onWordMouseOut: getCallback("onWordMouseOut"),
      onWordMouseOver: getCallback("onWordMouseOver"),
    };
  });
  
  const options = useMemo(() => {
    return {
      colors: [
        "#F3AA88",
        "#FFF65F",
        "#73C7A1",
        "#2B60FC",
        "#65DFFB",
        " #A58CFD",
        "#EA5F94",
      ],
      enableTooltip: true,
      deterministic: false,
      fontFamily: "Noto-Sans",
      fontSizes: [12, 70],
      fontStyle: "italic",
      fontWeight: "bold",
      padding: 5,
      rotations: 3,
      rotationAngles: [0],
      scale: "sqrt",
      spiral: "archimedean",
      transitionDuration: 1000,
      size: [600, 700],
    };
  });

  return (
    <ReactWordcloud
      words={words}
      callbacks={callbacks}
      options={options}
      onClick={onClick}
    ></ReactWordcloud>
  );
}

export default WordCloud;
