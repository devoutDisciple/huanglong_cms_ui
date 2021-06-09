import request from '@utils/AxiosRequest';

// 分页获取用户数据
export const getUsersByPage = (params) => request.get('/user/usersByPage', params);

// 获取用户增长曲线
export const getUserNumData = (params) => request.get('/data/userNumData', params);

// 获取发布内容增长曲线
export const getPublishNumData = (params) => request.get('/data/publishNumData', params);

// 获取点赞增长曲线
export const getGoodsNumData = (params) => request.get('/data/goodsNumData', params);

// 获取评论增长曲线
export const getCommentsNumData = (params) => request.get('/data/commentsNumData', params);
