import React from 'react';
import BoardWriteContainer from '../containers/board/BoardWriteContainer';
import BoardEditorContainer from '../containers/board/BoardEditorContainer';
function BoardWritePage () {
    return (
        <>
        <BoardEditorContainer></BoardEditorContainer>
        <BoardWriteContainer></BoardWriteContainer>
        </>
    );
};

export default BoardWritePage;