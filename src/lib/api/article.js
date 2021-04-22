import axios from 'axios';

const client_id = "5gDWdEm4JXL_4OLm1fhn"
const client_secret = "WWb8Zv_AeM"
const client = axios.create({
    // baseURL: '/v1/search',
    baseURL: 'https://openapi.naver.com/v1/search',
    headers: {'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret' : client_secret}
});

export default client;

export const getWordArticle = (keyword, display = 100) => {
    return client.get(`/news?display=${display}&query=${keyword}`)
}
