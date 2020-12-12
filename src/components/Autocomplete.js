
import React from 'react';
import ReactDOM from 'react-dom';
import request from 'axios';
import './Autocomplete.css';

const fD = ReactDOM.findDOMNode;

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: [],
            filteredKeywords: [],
            currentKeyword: ''
        };
        this.filter = this.filter.bind(this);
    }

    componentDidMount() {
        
        request({url: "https://pcenpicjxi.execute-api.ap-northeast-1.amazonaws.com/Prod/search?keyword="})
        .then(response => response.data)
        .then(body => {
            if(!body){
                return console.error('Failed to load')
            }
            this.setState({keywords: body})
        })
        .catch(console.error)
        
        /*let body = {
            "search":[
                {
                    "F_STOCK_LISTED_COMPANY_NO":97,
                    "F_STOCK_LISTED_COMPANY_CD":"005610",
                    "F_STOCK_LISTED_COMPANY_NAME":"SPC\uc0bc\ub9bd",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":322,
                    "F_STOCK_LISTED_COMPANY_CD":"005090",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uad11\uae00\ub77c\uc2a4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":323,
                    "F_STOCK_LISTED_COMPANY_CD":"001470",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ubd80\ud1a0\uac74",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":324,
                    "F_STOCK_LISTED_COMPANY_CD":"006400",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131SDI",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":325,
                    "F_STOCK_LISTED_COMPANY_CD":"006660",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uacf5\uc870",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":326,
                    "F_STOCK_LISTED_COMPANY_CD":"028260",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\ubb3c\uc0b0",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":327,
                    "F_STOCK_LISTED_COMPANY_CD":"207940",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\ubc14\uc774\uc624\ub85c\uc9c1\uc2a4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":328,
                    "F_STOCK_LISTED_COMPANY_CD":"032830",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc0dd\uba85",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":329,
                    "F_STOCK_LISTED_COMPANY_CD":"018260",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc5d0\uc2a4\ub514\uc5d0\uc2a4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":330,
                    "F_STOCK_LISTED_COMPANY_CD":"028050",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":331,
                    "F_STOCK_LISTED_COMPANY_CD":"009150",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc804\uae30",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":332,
                    "F_STOCK_LISTED_COMPANY_CD":"005930",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc804\uc790",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":333,
                    "F_STOCK_LISTED_COMPANY_CD":"001360",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc81c\uc57d",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":334,
                    "F_STOCK_LISTED_COMPANY_CD":"010140",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc911\uacf5\uc5c5",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":335,
                    "F_STOCK_LISTED_COMPANY_CD":"016360",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc99d\uad8c",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":336,
                    "F_STOCK_LISTED_COMPANY_CD":"068290",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\ucd9c\ud310\uc0ac",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":337,
                    "F_STOCK_LISTED_COMPANY_CD":"029780",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uce74\ub4dc",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":338,
                    "F_STOCK_LISTED_COMPANY_CD":"000810",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\ud654\uc7ac\ud574\uc0c1\ubcf4\ud5d8",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":339,
                    "F_STOCK_LISTED_COMPANY_CD":"006110",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc544\uc54c\ubbf8\ub284",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":340,
                    "F_STOCK_LISTED_COMPANY_CD":"145990",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc591\uc0ac",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":341,
                    "F_STOCK_LISTED_COMPANY_CD":"003230",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc591\uc2dd\ud488",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":342,
                    "F_STOCK_LISTED_COMPANY_CD":"002170",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc591\ud1b5\uc0c1",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":343,
                    "F_STOCK_LISTED_COMPANY_CD":"272550",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc591\ud328\ud0a4\uc9d5",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":344,
                    "F_STOCK_LISTED_COMPANY_CD":"000070",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc591\ud640\ub529\uc2a4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":345,
                    "F_STOCK_LISTED_COMPANY_CD":"002810",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc601\ubb34\uc5ed",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":346,
                    "F_STOCK_LISTED_COMPANY_CD":"005680",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc601\uc804\uc790\uacf5\uc5c5",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":347,
                    "F_STOCK_LISTED_COMPANY_CD":"003720",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc601\ud654\ud559\uacf5\uc5c5",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":348,
                    "F_STOCK_LISTED_COMPANY_CD":"023000",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc6d0\uac15\uc7ac",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":349,
                    "F_STOCK_LISTED_COMPANY_CD":"004380",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc775THK",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":350,
                    "F_STOCK_LISTED_COMPANY_CD":"002450",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc775\uc545\uae30",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":351,
                    "F_STOCK_LISTED_COMPANY_CD":"004440",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc77c\uc528\uc5d4\uc5d0\uc2a4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":352,
                    "F_STOCK_LISTED_COMPANY_CD":"000520",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc77c\uc81c\uc57d",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":353,
                    "F_STOCK_LISTED_COMPANY_CD":"009770",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc815\ud384\ud504",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":354,
                    "F_STOCK_LISTED_COMPANY_CD":"005500",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc9c4\uc81c\uc57d",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":355,
                    "F_STOCK_LISTED_COMPANY_CD":"004690",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ucc9c\ub9ac",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":356,
                    "F_STOCK_LISTED_COMPANY_CD":"010960",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud638\uac1c\ubc1c",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":357,
                    "F_STOCK_LISTED_COMPANY_CD":"004450",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud654\uc655\uad00",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":358,
                    "F_STOCK_LISTED_COMPANY_CD":"009470",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud654\uc804\uae30",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":359,
                    "F_STOCK_LISTED_COMPANY_CD":"011230",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud654\uc804\uc790\uacf5\uc5c5",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":360,
                    "F_STOCK_LISTED_COMPANY_CD":"001820",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud654\ucf58\ub374\uc11c\uacf5\uc5c5",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":361,
                    "F_STOCK_LISTED_COMPANY_CD":"000390",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud654\ud398\uc778\ud2b8\uacf5\uc5c5",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSPI"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1259,
                    "F_STOCK_LISTED_COMPANY_CD":"100090",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uac15\uc5e0\uc564\ud2f0",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1260,
                    "F_STOCK_LISTED_COMPANY_CD":"122350",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uae30",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1261,
                    "F_STOCK_LISTED_COMPANY_CD":"014970",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ub96d\ubb3c\uc0b0",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1262,
                    "F_STOCK_LISTED_COMPANY_CD":"018310",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ubaa9\uc5d0\uc2a4\ud3fc",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1263,
                    "F_STOCK_LISTED_COMPANY_CD":"053700",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ubcf4\ubaa8\ud130\uc2a4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1264,
                    "F_STOCK_LISTED_COMPANY_CD":"009620",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ubcf4\uc0b0\uc5c5",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1265,
                    "F_STOCK_LISTED_COMPANY_CD":"023600",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ubcf4\ud310\uc9c0",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1266,
                    "F_STOCK_LISTED_COMPANY_CD":"111870",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ubcf8\uc804\uc790",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1267,
                    "F_STOCK_LISTED_COMPANY_CD":"309930",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uba38\uc2a4\ud2b8\uc2a4\ud3293\ud638",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1268,
                    "F_STOCK_LISTED_COMPANY_CD":"291230",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc131\uc2a4\ud3292\ud638",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1269,
                    "F_STOCK_LISTED_COMPANY_CD":"009300",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc544\uc81c\uc57d",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1270,
                    "F_STOCK_LISTED_COMPANY_CD":"225190",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc591\uc635\ud2f1\uc2a4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1271,
                    "F_STOCK_LISTED_COMPANY_CD":"054540",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc601\uc5e0\ud14d",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1272,
                    "F_STOCK_LISTED_COMPANY_CD":"065570",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc601\uc774\uc5d4\uc528",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1273,
                    "F_STOCK_LISTED_COMPANY_CD":"032280",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc77c",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1274,
                    "F_STOCK_LISTED_COMPANY_CD":"002290",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc77c\uae30\uc5c5\uacf5\uc0ac",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1275,
                    "F_STOCK_LISTED_COMPANY_CD":"037460",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc9c0\uc804\uc790",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1276,
                    "F_STOCK_LISTED_COMPANY_CD":"032750",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc9c4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1277,
                    "F_STOCK_LISTED_COMPANY_CD":"054090",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\uc9c4\uc5d8\uc564\ub514",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1278,
                    "F_STOCK_LISTED_COMPANY_CD":"000250",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ucc9c\ub2f9\uc81c\uc57d",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1279,
                    "F_STOCK_LISTED_COMPANY_CD":"024950",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ucc9c\ub9ac\uc790\uc804\uac70",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1280,
                    "F_STOCK_LISTED_COMPANY_CD":"038500",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud45c\uc2dc\uba58\ud2b8",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1281,
                    "F_STOCK_LISTED_COMPANY_CD":"017480",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud604\ucca0\uac15",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                },
                {
                    "F_STOCK_LISTED_COMPANY_NO":1282,
                    "F_STOCK_LISTED_COMPANY_CD":"046390",
                    "F_STOCK_LISTED_COMPANY_NAME":"\uc0bc\ud654\ub124\ud2b8\uc6cd\uc2a4",
                    "F_STOCK_LISTED_COMPANY_SECTION":"KOSDAQ"
                }
            ]
        };*/

        // this.setState({keywords: body.search})
    }

    filter(event) 
    {
        this.setState({
            currentKeyword: event.target.value,
            filteredKeywords: (this.state.keywords.filter(
                    function(keyword, index, list){
                        if(event.target.value == '') { return false; }
                        return (event.target.value.toLowerCase() === keyword.F_STOCK_LISTED_COMPANY_NAME.toLowerCase().substr(0, event.target.value.length))
                    }
                )
            )}
            , function(){}
        );
    }

    keywordList() {
        this.state.filteredKeywords.map(
            function(keyword, index, list){
                return <div key={keyword.F_STOCK_LISTED_COMPANY_CD}>
                        <a className="keyword-list-item" href={'/#/' + keyword.name} target="_blank">
                            #{keyword.F_STOCK_LISTED_COMPANY_NAME}
                        </a>
                    </div>
            }
        )
    }

    render() {
        return (
            <div className="searchbar-autocomplete">
                <div>
                    <input className="searchbar-input" 
                        type="text" 
                        onChange={this.filter}
                        value={this.currentKeyword}
                    ></input>
                </div>
                <div className="keyword-list">
                    {
                        this.state.filteredKeywords.map(
                            function(keyword, index, list){
                                return <div key={keyword.F_STOCK_LISTED_COMPANY_CD}>
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
  
export default Autocomplete;