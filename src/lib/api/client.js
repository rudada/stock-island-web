import axios from 'axios';

const client = axios.create();


//글로벌 설정
client.defaults.baseURL = 'https://qmj5oql835.execute-api.ap-northeast-1.amazonaws.com/api';

export default client;