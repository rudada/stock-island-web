import React from "react";
import "./CommentEdit.scss";

const CommentEdit = props => {
    return (
        <div className="CommentEdit">
            <textarea placeholder="Add a Comment"type="text"></textarea>
            <button className="submit">send</button>
        </div>
    );
};

export default CommentEdit;