import React from 'react';
import PostListContainer from '../containers/board/PostListContainer'
import PaginationContainer from '../containers/board/PaginationContainer'

const PostListPage = props => {
    return (
        <>
        <PostListContainer></PostListContainer>
        <PaginationContainer></PaginationContainer>
        </>
    );
};

export default PostListPage;