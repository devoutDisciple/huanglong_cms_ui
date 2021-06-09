import request from '@utils/AxiosRequest';

// 分页获取用户数据
export const getPlatesByPage = (params) => request.get('/plate/platesByPage', params);

export const deletePlateById = (params) => request.post('/plate/deleteById', params);

export const addPlate = (params) => request.post('/plate/add', params);

export const editPlate = (params) => request.post('/plate/edit', params);