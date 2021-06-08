import { getData, getUserNumData, getPublishNumData } from '@service/order';

// 获取汇总数据
export const getDataFunc = () => (dispatch) => {
	getData().then((res) => {
		dispatch({
			type: 'data/setTotalData',
			payload: res.data,
		});
	});
};

// 获取用户增长曲线
export const getUserNumDataFunc = () => (dispatch) => {
	getUserNumData().then((res) => {
		if (Array.isArray(res.data)) {
			const xAxis = [];
			const yAxis = [];
			res.data.forEach((item) => {
				xAxis.push(item.create_time);
				yAxis.push(item.user_total);
			});
			dispatch({
				type: 'data/setUserData',
				payload: { xAxis, yAxis },
			});
		}
	});
};

// 获取发布内容增长曲线
export const getPublishNumDataFunc = () => (dispatch) => {
	getPublishNumData().then((res) => {
		if (Array.isArray(res.data)) {
			const xAxis = [];
			const yAxis = [];
			res.data.forEach((item) => {
				xAxis.push(item.create_time);
				yAxis.push(item.publish_total);
			});
			dispatch({
				type: 'data/setPublishData',
				payload: { xAxis, yAxis },
			});
		}
	});
};

export const getSalesDataByRange = () => {};
