import React from 'react';
import './BoardEditor.scss';

function BoardEditor({title, content, onChangeField}) {
    const onChangeTitle = e => {
        onChangeField({key: 'title', value: e.target.value});
    };
    const onChangeContent = e => {
        onChangeField({key: 'content', value: e.target.value});
    };
    return (
        <div className="BoardEditor">
            <textarea className="title" placeholder="Title" type="text" value={title} onChange={onChangeTitle}></textarea>
            <textarea className="content" placeholder="Content"type="text" value={content} onChange={onChangeContent}></textarea>
        </div>
    );
}

export default BoardEditor;