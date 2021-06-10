import { getCircleByPage, deleteCircle, addCircle, editPlate, getAllPlates, getAddressList } from '@service/common';
import { message } from 'antd';
// 设置loading
const setLoading = (flag, dispatch) => {
	dispatch({
		type: 'circle/setLoading',
		payload: flag,
	});
};

// 分页获取数据
export const getCirclesByPageFunc = (params) => (dispatch, getState) => {
	setLoading(true, dispatch);
	const {
		circle: { condition },
	} = getState();
	params = { ...condition, ...params };
	getCircleByPage(params)
		.then((res) => {
			dispatch({
				type: 'circle/setTableData',
				payload: { result: res.data, condition: params },
			});
		})
		.finally(() => setLoading(false, dispatch));
};

// 查询模块信息
export const getPlateListFunc = () => (dispatch) => {
	setLoading(true, dispatch);
	getAllPlates()
		.then((res) => {
			dispatch({
				type: 'circle/setPlateList',
				payload: res.data,
			});
		})
		.finally(() => setLoading(false, dispatch));
};

// 查询地址信息
export const getAddressListFunc = () => (dispatch) => {
	setLoading(true, dispatch);
	getAddressList()
		.then((res) => {
			console.log(res, 32);
			dispatch({
				type: 'circle/addressList',
				payload: res.data,
			});
		})
		.finally(() => setLoading(false, dispatch));
};

// 新增圈子
export const addCircleFunc = (params, onSearch, controllerDialog) => (dispatch) => {
	addCircle(params)
		.then(() => {
			message.success('新增成功');
			onSearch();
			controllerDialog();
		})
		.finally(() => setLoading(false, dispatch));
};

// 编辑模块
export const editPlateFunc = (params, onSearch, controllerDialog) => (dispatch) => {
	editPlate(params)
		.then(() => {
			message.success('编辑成功');
			onSearch();
			controllerDialog();
		})
		.finally(() => setLoading(false, dispatch));
};
// 删除模块
export const deleteCircleFunc = (params, onSearch) => (dispatch) => {
	deleteCircle(params)
		.then(() => {
			message.success('删除成功');
			onSearch();
		})
		.finally(() => setLoading(false, dispatch));
};
