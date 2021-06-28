import React, { useEffect, useState } from 'react';
import { Modal, Form, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './redux/action';
import styles from './index.less';

export default ({ circleId, controllerDialog }) => {
	const columns = [
		{
			title: '话题名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '排序',
			dataIndex: 'sort',
			key: 'sort',
		},
		{
			title: '操作',
			dataIndex: 'name',
			key: 'name',
		},
	];
	const { topicList } = useSelector((state) => state.circle);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(action.onSearchTopics({ circle_id: circleId }));
	}, [circleId, dispatch]);

	const handleOk = () => {
		controllerDialog();
	};

	const handleCancel = () => {
		controllerDialog();
	};

	return (
		<Modal className={styles.dialog} title="话题" visible onOk={handleOk} onCancel={handleCancel}>
			<Table rowKey="id" dataSource={topicList} columns={columns} pagination={{}} />
		</Modal>
	);
};
