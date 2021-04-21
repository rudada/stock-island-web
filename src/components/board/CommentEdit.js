import React from "react";
import BoardButton from "../common/BoardButton";
import "./CommentEdit.scss";

const CommentEdit = props => {
    return (
        <div className="CommentEdit">
            <textarea placeholder="Add a Comment"type="text"></textarea>
            <BoardButton text="send"></BoardButton>
        </div>
    );
};

export default CommentEdit;