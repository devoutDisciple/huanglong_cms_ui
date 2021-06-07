import { addReduce } from '@store/redux/index';

const initState = {};

const data = (state = initState, action) => {
	switch (action.type) {
		case 1:
			return { ...state, hello: 'data' };
		default:
			break;
	}
	return state;
};

export default addReduce({ data });
