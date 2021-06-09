import React from 'react';
import { Spin, Table } from 'antd';
import { useSelector } from 'react-redux';
import Search from './Search';
import './redux/reducer';
import styles from './index.less';

export default () => {
	const {
		data: { count, list },
		condition: { current },
		loading,
	} = useSelector((state) => state.member);

	const columns = [
		{
			title: '头像',
			dataIndex: 'photo',
			key: 'photo',
			render: (txt) => <img className={styles.user_photo} alt="加载失败" src={txt} />,
		},
		{
			title: '昵称',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: '性别',
			dataIndex: 'sex',
			key: 'sex',
			render: (txt) => <span>{txt === 1 ? '男' : '女'}</span>,
		},
		{
			title: '所属区域',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '学校',
			dataIndex: 'school',
			key: 'school',
		},
		{
			title: '年级',
			dataIndex: 'level',
			key: 'level',
		},
		{
			title: '点赞数量',
			dataIndex: 'goods',
			key: 'goods',
		},
		{
			title: '粉丝数量',
			dataIndex: 'fans',
			key: 'fans',
		},
		{
			title: '关注人数',
			dataIndex: 'publish',
			key: 'publish',
		},
		{
			title: '积分',
			dataIndex: 'integral',
			key: 'integral',
		},
		{
			title: '注册时间',
			dataIndex: 'create_time',
			key: 'create_time',
		},
	];

	return (
		<div className={styles.wrap}>
			<Spin spinning={loading}>
				<Search />
				<div className={styles.table}>
					<Table
						dataSource={list}
						columns={columns}
						pagination={{ current, total: count, showTotal: (total) => `共 ${total} 条` }}
					/>
				</div>
			</Spin>
		</div>
	);
};
