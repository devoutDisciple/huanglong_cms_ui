import request from '@utils/AxiosRequest';

// 获取订单数据汇总
export const getOrderData = (params) => request.get('/order/getDataNum', params);

// 获取销售数据汇总
export const getSalesDataByRange = (params) => request.get('/order/getSalesByRange', params);
