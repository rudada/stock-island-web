import client from './client';

export const getWordcloud = () => {
    return client.get('/wordcloud');
}