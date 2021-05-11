import React from 'react';
import Searchbar from '../components/Searchbar';
import SearchDetailContainer from '../containers/search/SearchDetailContainer';
import SearchArticleContainer from '../containers/search/SearchArticleContainer';
import SearchGraphContainer from '../containers/search/SearchGraphContainer';

function Search({match}) {
    return (
        <div className="content_search">
            {/* <Searchbar></Searchbar> */}
            <SearchDetailContainer keyword = {match.params.keyword}></SearchDetailContainer>
            <SearchGraphContainer keyword = {match.params.keyword}></SearchGraphContainer>
            <SearchArticleContainer></SearchArticleContainer>
        </div>
    )
}

export default Search;