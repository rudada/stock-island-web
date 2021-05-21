import React from 'react';
import BoardDetailContainer from '../containers/board/BoardDetailContainer'
import CommentContainer from '../containers/board/CommentContainer'
import CommentEditContainer from '../containers/board/CommentEditContainer'

function BoardDetailPage ({match}) {
    return (
        <>
        <BoardDetailContainer post_id={match.params.post_id}></BoardDetailContainer>
        <CommentContainer></CommentContainer>
        <CommentEditContainer></CommentEditContainer>
        </>
    );
};


export default BoardDetailPage;