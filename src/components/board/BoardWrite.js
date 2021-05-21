import React from 'react';
import BoardButton from '../../components/common/BoardButton';

function BoardWrite({onPost, onCancel, isEdit}) {
    return (
        <div className="BoardWrite"> 
            <BoardButton text={isEdit ? "edit" : "post"} onClick={onPost}></BoardButton>
            <BoardButton text="cancel" onClick={onCancel}></BoardButton>
        </div>
    );
}

export default BoardWrite;