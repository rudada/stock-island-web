import React from "react";
import ListComponent from '../common/ListComponent'


function StockItemArticleList(props) {
    const {articles} = props;

    return(
        <div className="box effect8">
            <ListComponent columnSize={3} columnNames={['NO', 'TITLE', 'DATE']} contents={articles}></ListComponent>
        </div>
    );
}

export default StockItemArticleList;