import { getOrderData } from '@service/order';

export const getOrderDataNum = () => (dispatch, getState) => {
	getOrderData().then((res) => {
		console.log(res, 999);
	});
};

export const getSalesDataByRange = () => {};
