import React from 'react';
import BoardButton from '../common/BoardButton';
import './BoardWrite.scss';

function BoardWrite({title, content, changeTitle, changeContent, onPost, onCancel}) {
    const onChangeTitle = e => {
        changeTitle(e.target.value);
    };
    const onChangeContent = e => {
        changeContent(e.target.value);
    };
    return (
        <div className="BoardWrite">
            <textarea className="title" placeholder="Title" type="text" value={title} onChange={onChangeTitle}></textarea>
            <textarea className="content" placeholder="Content"type="text" value={content} onChange={onChangeContent}></textarea>
            <BoardButton text="post" onClick={() => onPost()}></BoardButton>
            <BoardButton text="cancel" onClick={() => onCancel()}></BoardButton>
        </div>
    );
}

export default BoardWrite;