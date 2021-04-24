// import "d3-transition";
// import { select } from "d3-selection";
import React, { Component } from "react";
//import ReactDOM from "react-dom";
// import ReactWordcloud from "react-wordcloud";
import { getWordcloud } from "../../lib/api/home";
import ArticleModalContainer from "../common/ArticleModalContainer.js";
import WordCloud from "../../components/home/WordCloud.js"

// import "tippy.js/dist/tippy.css";
// import "tippy.js/animations/scale.css";



class CloudContainer extends Component {
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
    if(e.target.nodeName != 'text') return;
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
        {/* <ReactWordcloud
          options={options}
          callbacks={callbacks}
          words={this.state.words}
          onClick={(e) => this.onClick(e)}
        /> */}

        <WordCloud words={this.state.words} onClick={(e) => this.onClick(e)}></WordCloud>
      </div>
    );
  }
}

export default CloudContainer;
