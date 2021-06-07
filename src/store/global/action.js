import { getLogin } from '@service/login.js';

// 验证是否登录
export const getLoginFunc = () => (dispatch, getState) => {
	getLogin().then((res) => {
		console.log(res, 111);
		console.log('登录成功');
		console.log(getState());
		dispatch({
			type: 'user/setLogin',
			payload: true,
		});
	});
};

export const getTest = () => {
	getLogin().then(() => {});
};
