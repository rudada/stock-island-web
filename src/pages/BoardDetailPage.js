import React from 'react';
import BoardDetailContainer from '../containers/board/BoardDetailContainer'
import CommentContainer from '../containers/board/CommentContainer'
import CommentEditContainer from '../containers/board/CommentEditContainer'

function BoardDetailPage ({match}) {
    return (
        <>
        <BoardDetailContainer></BoardDetailContainer>
        <CommentContainer></CommentContainer>
        <CommentEditContainer></CommentEditContainer>
        </>
    );
};


export default BoardDetailPage;