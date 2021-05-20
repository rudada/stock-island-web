import client from './client';

export const listPost = ({ offset, limit}) => {
    return client.get(`/board/posts?offset=${offset}&limit=${limit}`);
}

// export const readPost = ();
export const writePost = ({ title, content }) => {
    return client.post('/board/posts', {title, content});
};