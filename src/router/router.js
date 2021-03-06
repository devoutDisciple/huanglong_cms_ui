const rootRouter = [
	{
		key: 'home',
		name: '首页',
		path: '/home',
		components: () => import('@views/home/index'),
	},
	{
		key: 'login',
		name: '登录',
		path: '/login',
		components: () => import('@views/login/index'),
	},
];

const contentRouter = [
	{
		key: 'data',
		name: '数据监控',
		path: '/home/data',
		icon: '',
		showMenu: true,
		components: () => import('@views/data/index'),
	},
	{
		key: 'user',
		name: '用户管理',
		path: '/home/user',
		icon: '',
		showMenu: true,
		components: () => import('@views/user/index'),
	},
	{
		key: 'plate',
		name: '板块管理',
		path: '/home/plate',
		icon: '',
		showMenu: true,
		components: () => import('@views/plate/index'),
	},
	{
		key: 'circle',
		name: '圈子管理',
		path: '/home/circle',
		icon: '',
		showMenu: true,
		components: () => import('@views/circle/index'),
	},
	{
		key: 'cabinet',
		name: '内容管理',
		path: '/home/content',
		icon: '',
		showMenu: true,
		components: () => import('@views/content/index'),
	},
	{
		key: 'shop',
		name: '区域管理',
		path: '/home/area',
		icon: '',
		showMenu: true,
		components: () => import('@views/address/index'),
	},
	{
		key: 'opinion',
		name: '意见和反馈',
		path: '/home/opinion',
		icon: '',
		showMenu: true,
		components: () => import('@views/opinion/index'),
	},
];

export default { rootRouter, contentRouter };
