import React, {useCallback} from "react";
import "./PostList.scss";

const PostList = ({ posts }) => { 
  return (
    <div className="PostList">
      <table className="post-list">
        <thead>
          <tr>
            <td width="10%">no.</td>
            <td width="40%">TITLE</td>
            <td width="20%">ID</td>
            <td width="20%">DATE</td>
            <td width="10%">VIEWS</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, key) => {
            return (
              <tr key={key} 
                  onClick={() => location.href=`board/${post.id}`}>
                <td width="10%">{post.id}</td>
                <td width="40%">{post.title}</td>
                <td width="20%">{post.user}</td>
                <td width="20%">{post.date}</td>
                <td width="10%">{post.views}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
