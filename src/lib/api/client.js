import axios from 'axios';

const client = axios.create();


//글로벌 설정
client.defaults.baseURL = 'https://qmj5oql835.execute-api.ap-northeast-1.amazonaws.com/api';
// client.defaults.headers = {'Allow-Control-Allow-Origin' : '*'};



// api 함수
// export const register = ({token}) => {
//     client.post('/api/auth/register', {token});
// }


export default client;