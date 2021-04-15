import React from 'react';
import PostViewContainer from '../containers/board/PostViewContainer'
import CommentContainer from '../containers/board/CommentContainer'
import CommentEditContainer from '../containers/board/CommentEditContainer'

function PostViewPage ({match}) {
    return (
        <>
        <PostViewContainer></PostViewContainer>
        <CommentContainer></CommentContainer>
        <CommentEditContainer></CommentEditContainer>
        </>
    );
};


export default PostViewPage;