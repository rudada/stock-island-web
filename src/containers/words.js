
import React from 'react';
import ReactDOM from 'react-dom';
import request from 'axios';
//import './Autocomplete.css';

const fD = ReactDOM.findDOMNode;

class Words extends React.Component {
  // constructor(props) {

  //   super(props);

  //   this.state = {

  //     words: []

  //   }

  // }

  


  

  // componentDidMount() {

  //   fetch("https://pcenpicjxi.execute-api.ap-northeast-1.amazonaws.com/Prod/search/wordcloud")

  //     .then(res => res.json())

  //     .then(json => {

  //       this.setState({

  //         words: data,
	        

  //       })

  //     })

  // }

  

  // render() {

  //   const { words } = this.state;
  //   const wordsList = words.map((word) => (
  //       <div >
  //         {word.keyword}
  //         {word.count}
  //         {word.links}
  //       </div>
  //   ));
  //   return (
  //       <div>
  //           {wordsList}
  //       </div>
  //   );

  // }



    constructor(props) {
        super(props);
        this.state = {
            keyword: [],
            count: [],
            links: []
        };
        this.filter = this.filter.bind(this);
    }

    componentDidMount() {

        let config = {
            baseURL : 'https://pcenpicjxi.execute-api.ap-northeast-1.amazonaws.com/Prod/search/wordcloud',
            method: 'GET',
        }        

        request(config)
        .then(response => response.data)
        .then(body => {
            if(!body){
                return console.error('Failed to load')
            }
            this.setState({keywords: body.wordcloud})
        })
        .catch(console.error)
    }

    wordList() {
      this.state.keyword.map(
        function(keyword, count, links){
          return <div key={keyword}>
            {keyword}
            {count}
            {links}
          </div>
        }
      )
    }

    render() {
        return (
            <div className="searchbar-autocomplete">
                
                <div className="keyword-list">
                    {
                        this.state.keyword.map(
                            function(keyword, index, list){
                                return <div key={keyword}>
                                        <a className="keyword-list-item" href={'/#/' + keyword.name} target="_blank">
                                            {keyword.F_STOCK_LISTED_COMPANY_NAME}
                                        </a>
                                    </div>
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}
  
export default Words;


// const words = [
//     {
//       text: 'told',
//       value: 64,
//     },
//     {
//       text: 'mistake',
//       value: 11,
//     },
//     {
//       text: 'thought',
//       value: 16,
//     },
//     {
//       text: 'bad',
//       value: 17,
//     },
//     {
//       text: 'correct',
//       value: 10,
//     },
//     {
//       text: 'day',
//       value: 54,
//     },
//     {
//       text: 'prescription',
//       value: 12,
//     },
//     {
//       text: 'time',
//       value: 77,
//     },
//     {
//       text: 'thing',
//       value: 45,
//     },
//     {
//       text: 'left',
//       value: 19,
//     },
//     {
//       text: 'pay',
//       value: 13,
//     },
//     {
//       text: 'people',
//       value: 32,
//     },
//     {
//       text: 'month',
//       value: 22,
//     },
//     {
//       text: 'again',
//       value: 35,
//     },
//     {
//       text: 'review',
//       value: 24,
//     },
//     {
//       text: 'call',
//       value: 38,
//     },
//     {
//       text: '테슬라',
//       value: 70,
//     },
//     {
//       text: 'asked',
//       value: 26,
//     },
//     {
//       text: 'finally',
//       value: 14,
//     },
//     {
//       text: 'insurance',
//       value: 29,
//     },
//     {
//       text: 'week',
//       value: 41,
//     },
//     {
//       text: 'called',
//       value: 49,
//     },
//     {
//       text: 'problem',
//       value: 20,
//     },
//     {
//       text: '삼성전자',
//       value: 59,
//     },
//     {
//       text: 'help',
//       value: 49,
//     },
//     {
//       text: 'felt',
//       value: 45,
//     },
//     {
//       text: 'discomfort',
//       value: 11,
//     },
//     {
//       text: 'lower',
//       value: 22,
//     },
//     {
//       text: 'severe',
//       value: 12,
//     },
//     {
//       text: 'free',
//       value: 38,
//     },
//     {
//       text: 'better',
//       value: 54,
//     },
//     {
//       text: 'muscle',
//       value: 14,
//     },
//     {
//       text: 'neck',
//       value: 41,
//     },
//     {
//       text: 'root',
//       value: 24,
//     },
//     {
//       text: 'adjustment',
//       value: 16,
//     },
//     {
//       text: 'therapy',
//       value: 29,
//     },
//     {
//       text: 'injury',
//       value: 20,
//     },
//     {
//       text: 'excruciating',
//       value: 10,
//     },
//     {
//       text: 'chronic',
//       value: 13,
//     },
//     {
//       text: 'chiropractor',
//       value: 35,
//     },
//     {
//       text: 'treatment',
//       value: 59,
//     },
//     {
//       text: 'tooth',
//       value: 32,
//     },
//     {
//       text: 'chiropractic',
//       value: 17,
//     },
//     {
//       text: 'dr',
//       value: 77,
//     },
//     {
//       text: 'relief',
//       value: 19,
//     },
//     {
//       text: 'shoulder',
//       value: 26,
//     },
//     {
//       text: 'nurse',
//       value: 17,
//     },
//     {
//       text: 'room',
//       value: 22,
//     },
//     {
//       text: 'hour',
//       value: 35,
//     },
//     {
//       text: 'wait',
//       value: 38,
//     },
//     {
//       text: 'hospital',
//       value: 11,
//     },
//     {
//       text: 'eye',
//       value: 13,
//     },
//     {
//       text: 'test',
//       value: 10,
//     },
//     {
//       text: 'appointment',
//       value: 49,
//     },
//     {
//       text: 'medical',
//       value: 19,
//     },
//     {
//       text: 'question',
//       value: 20,
//     },
//     {
//       text: 'office',
//       value: 64,
//     },
//     {
//       text: 'care',
//       value: 54,
//     },
//     {
//       text: 'minute',
//       value: 29,
//     },
//     {
//       text: 'waiting',
//       value: 16,
//     },
//     {
//       text: 'lg화학',
//       value: 59,
//     },
//     {
//       text: 'health',
//       value: 49,
//     },
//     {
//       text: 'pair',
//       value: 11,
//     },
//     {
//       text: 'wanted',
//       value: 20,
//     },
//     {
//       text: 'frame',
//       value: 13,
//     },
//     {
//       text: 'gum',
//       value: 10,
//     },
//     {
//       text: 'chair',
//       value: 12,
//     },
//     {
//       text: 'ray',
//       value: 22,
//     },
//     {
//       text: 'dentistry',
//       value: 11,
//     },
//     {
//       text: 'canal',
//       value: 13,
//     },
//     {
//       text: 'procedure',
//       value: 32,
//     },
//     {
//       text: 'dollar',
//       value: 11,
//     },
//     {
//       text: 'business',
//       value: 32,
//     },
//     {
//       text: 'refund',
//       value: 10,
//     },
//   ];
  
//   export default words;