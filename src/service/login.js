import request from '@utils/AxiosRequest';

export const getLogin = (params) => request.get('/api/account/isLogin', params);

export const hello = () => request.get('/account/isLogin');
