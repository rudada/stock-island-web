import "d3-transition";
import { select } from "d3-selection";
import React, { Component } from "react";
//import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";
import { getWordcloud } from "../../lib/api/home";
import ArticleModalContainer from "../common/ArticleModalContainer.js";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

function getCallback(callback) {
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
}

const callbacks = {
  getWordTooltip: (word) => `The word "${word.text}" appears ${word.value} times.`,
  onWordMouseOut: getCallback("onWordMouseOut"),
  onWordMouseOver: getCallback("onWordMouseOver"),
};

const options = {
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

class Cloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      selectedKeyword: "",
      isModalOpen: false,
    };
  }

  componentDidMount() {
    this._getWords();
  }

  _getWords = async () => {
    const data = await getWordcloud()
      .then((res) => res.data.body)
      .then((res) => JSON.parse(res).data);

    const words = data.map((row) => ({
      text: row["NAMED_ENTITY"],
      value: row["NAMED_ENTITY_COUNT"],
    }));

    this.setState({
      words,
    });
  };

  onClick(e) {
    if(e.target.nodeName == 'svg') return;
    this.setState({ selectedKeyword: e.target.textContent });
    this.changeModal();
  }

  changeModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div>
        <ArticleModalContainer keyword={this.state.selectedKeyword} isOpen={this.state.isModalOpen} changeModal={() => this.changeModal()}></ArticleModalContainer>
        <ReactWordcloud
          options={options}
          callbacks={callbacks}
          words={this.state.words}
          onClick={(e) => this.onClick(e)}
        />
      </div>
    );
  }
}

export default Cloud;
