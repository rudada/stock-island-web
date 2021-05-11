import client from './client';

export const getDetail = (company_cd) => {
    return client.get(`/company/${company_cd}`);
}

// export const getGraph = ()