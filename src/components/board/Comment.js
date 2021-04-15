import React from "react";
import "./Comment.scss";

function CommentItem({ user, content, date }) {
  return (
    <div className="CommentItem">
      <div className="column-1"></div>

      <div className="column-2">
        <div className="comment-content">
          <div className="content">{content}</div>
          <div className="date">Updated on {date}</div>
        </div>
      </div>

      <div className="column-3">
        <div className="comment-userinfo">
          <div className="userid">{user}</div>
        </div>
      </div>
    </div>
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      {props.comments.map((comment, key) => (
        <CommentItem
          user={comment.user}
          content={comment.content}
          date={comment.date}
          key={key}
        ></CommentItem>
      ))}
    </div>
  );
}

export default Comment;
