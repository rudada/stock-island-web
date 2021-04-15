import React from 'react';
import PostList from '../../components/board/PostList';

const posts=[];
for(let i = 0; i < 10; i++ ) {
    posts.push({id : i, user : 'userid' + i, title : 'title' + i, content : 'content'  + i, date : '2021-03-17', views : 1, profileImage : "https://mdbootstrap.com/img/new/standard/city/041.jpg"});
}

function PostListContainer({props}) {
    return (
        <PostList posts={posts}></PostList>
    );
}

export default PostListContainer;