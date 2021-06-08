import { addReduce } from '@store/redux/index';

const initState = {
	totalData: {},
	userData: {},
	publishData: {},
};

const data = (state = initState, action) => {
	switch (action.type) {
		case 'data/setTotalData':
			return { ...state, totalData: action.payload };
		case 'data/setUserData':
			return { ...state, userData: action.payload };
		case 'data/setPublishData':
			return { ...state, publishData: action.payload };
		default:
			break;
	}
	return state;
};

export default addReduce({ data });
