import React from "react";
import { connect } from "react-redux";
import Sample from "../components/sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleContainer = ({ getPost, getUsers, post, users, loadingPost, loadingUsers}) => {
  useEffect(() => {
    const fn = async() => {
      try {
        getPost(1);
        getUsers();
      } catch(e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  //mapStateToProps
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  //mapDispatchToProps
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
