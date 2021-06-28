export const filterIdentity = (type) => {
	let txt = '学生';
	switch (Number(type)) {
		case 1:
			txt = '学生';
			break;
		case 2:
			txt = '学校老师';
			break;
		case 3:
			txt = '机构老师';
			break;
		default:
			txt = '学生';
			break;
	}
	return txt;
};
