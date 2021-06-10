import { addReduce } from '@store/redux/index';

const initState = {
	loading: false,
	data: {
		count: 0,
		list: [],
	},
	plateList: [], // 模块信息
	addressList: [], // 地址信息
	condition: { current: 1 },
};

const circle = (state = initState, action) => {
	switch (action.type) {
		case 'circle/setLoading':
			return { ...state, loading: action.payload };
		case 'circle/setTableData':
			return {
				...state,
				data: action.payload.result,
				condition: { ...state.condition, ...action.payload.condition },
			};
		case 'circle/setPlateList':
			return {
				...state,
				plateList: action.payload,
			};
		case 'circle/addressList':
			return {
				...state,
				addressList: action.payload,
			};
		default:
			break;
	}
	return state;
};

export default addReduce({ circle });
