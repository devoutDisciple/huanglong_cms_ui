import React, { useState } from 'react';
import { Spin, Table, Button, Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CONTENT_TYPE } from '@utils/const';
import Search from './Search';
import './redux/reducer';
import * as action from './redux/action';
import DetailDialog from './detailDialog';
import styles from './index.less';

export default () => {
	const {
		data: { count, list },
		condition: { current },
		loading,
	} = useSelector((state) => state.content);
	const dispatch = useDispatch();
	const [detailDialogVisible, setDetailDialogVisible] = useState(false);

	const onSearch = () => {
		dispatch(action.getContentsByPageFunc({}));
	};

	const controllerDetailDialog = () => setDetailDialogVisible(!detailDialogVisible);

	// 删除模块
	const deleteRecord = (record) => {
		dispatch(action.deleteCircleFunc({ circle_id: record.id }, onSearch));
	};

	const columns = [
		{
			title: '用户名称',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: '圈子',
			dataIndex: 'circle_names',
			key: 'circle_names',
			render: (txt) => {
				const fields = JSON.parse(txt).join(',');
				return <span>{fields}</span>;
			},
		},
		{
			title: '话题',
			dataIndex: 'topic_names',
			key: 'topic_names',
			render: (txt) => {
				const fields = JSON.parse(txt).join(',');
				return <span>{fields || '--'}</span>;
			},
		},
		{
			title: '类型',
			dataIndex: 'type',
			key: 'type',
			render: (txt) => <span>{CONTENT_TYPE.filter((item) => item.num === txt)[0]?.label}</span>,
		},

		{
			title: '点赞',
			dataIndex: 'goods',
			key: 'goods',
		},
		{
			title: '评论',
			dataIndex: 'comment',
			key: 'comment',
		},
		{
			title: '转发',
			dataIndex: 'type',
			key: 'type',
		},
		{
			title: '热度',
			dataIndex: 'share',
			key: 'share',
		},
		{
			title: '发布时间',
			dataIndex: 'create_time',
			key: 'create_time',
		},
		{
			title: '操作',
			dataIndex: 'operation',
			key: 'operation',
			render: (txt, record) => (
				<span>
					<Popconfirm
						placement="top"
						title="是否确认删除"
						onConfirm={() => deleteRecord(record)}
						okText="确定"
						cancelText="取消"
					>
						<Button type="link">删除</Button>
					</Popconfirm>
					<Button onClick={() => {}} type="link">
						详情
					</Button>
				</span>
			),
		},
	];

	const pageChange = (page) => {
		dispatch(action.getContentsByPageFunc({ current: page }));
	};

	return (
		<div className={styles.wrap}>
			<Spin spinning={loading}>
				<Search />
				<div className={styles.table}>
					<Table
						rowKey="id"
						dataSource={list}
						columns={columns}
						pagination={{
							current,
							total: count,
							pageSize: 10,
							showTotal: (total) => `共 ${total} 条`,
							onChange: pageChange,
						}}
					/>
				</div>
			</Spin>
			{detailDialogVisible && <DetailDialog controllerDialog={controllerDetailDialog} />}
		</div>
	);
};
