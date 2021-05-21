import client from "./client";

const BOARD = "/board/posts/";

export const listPost = ({ offset, limit }) => {
  return client.get(BOARD, {
    params: { offset: offset, limit: limit },
  });
};

export const readPost = ({ post_id }) => {
  return client.get(BOARD + post_id);
};

export const writePost = ({ title, content }) => {
  return client.post(BOARD, { title, content });
};

export const updatePost = ({ postid, title, content }) => {
  return client.patch(BOARD + postid, { title, content });
};

export const removePost = ({ post_id }) => {
  return client.delete(BOARD + post_id);
};