import client from './client';

export const autoComplete = (keyword) => {
    return client.get(`/search/${keyword}`)
}

export const getDetail = (company_cd) => {
    return client.get(`/company/${company_cd}`);
}

export const getPrice = ({stockid, from_date, end_date}) => {
    return client.get('/stock', {
        params: {
            stockid: stockid,
            from_date: from_date,
            end_date: end_date,
        }
    });
}