import { getPlatesByPage, deletePlateById, addPlate, editPlate } from '@service/common';
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
	getPlatesByPage(params)
		.then((res) => {
			dispatch({
				type: 'circle/setTableData',
				payload: { result: res.data, condition: params },
			});
		})
		.finally(() => setLoading(false, dispatch));
};

// 删除模块
export const deletePlateByIdFunc = (params, onSearch) => (dispatch) => {
	deletePlateById(params)
		.then(() => {
			message.success('删除成功');
			onSearch();
		})
		.finally(() => setLoading(false, dispatch));
};

// 新增模块
export const addPlateFunc = (params, onSearch, controllerDialog) => (dispatch) => {
	addPlate(params)
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
